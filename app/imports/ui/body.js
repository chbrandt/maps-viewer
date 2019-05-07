import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  bodies: [
    { bodyName: "Mercury" }
  ]
})

Template.bodyMenuBtn.events({
  'click' (event) {
    event.preventDefault();
    console.log(event);
  }
})

Template.bodySearchBox.events({
  'keyup input' (event) {
    event.preventDefault();
    console.log(event);
  },

  'click button' (event) {
    event.preventDefault();
    console.log(event);
  }
})

Template.mapContainer.onRendered(() => {
  var style_simple = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#00AAFF',
      width: 0.1
    })
  });

  var style_selected = new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(255,255,255,0.5)'
    }),
    stroke: new ol.style.Stroke({
      color: '#FFAA00',
      width: 1
    })
  });

  var mousePositionControl = new ol.control.MousePosition({
          className: 'custom-mouse-position',
          target: document.getElementById('location'),
          coordinateFormat: ol.coordinate.createStringXY(5),
          undefinedHTML: '&nbsp;'
        });

  var format = 'image/png';

  var raster_global = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: 'http://localhost:8080/mercury/wms',
      params: {LAYERS: 'mercury:mercury_global_MD3Color_665m_EPSG4326'}
    })
  });

  var raster_geounits_3 = new ol.layer.Tile({
    visible: true,
    opacity: 0.5,
    source: new ol.source.TileWMS({
      url: 'http://localhost:8080/mercury/wms',
      params: {'FORMAT': format,
               'VERSION': '1.1.1',
               tiled: true,
            "LAYERS": 'mercury:H05_geological_units_3_classes_EPSG4326',
            "exceptions": 'application/vnd.ogc.se_inimage',
      }
    })
  });

  var vector_geounits_3_src = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function(extent) {
      return 'http://localhost:8080/wfs?' +
          'service=WFS&version=1.1.0&request=GetFeature&' +
          'typename=mercury:H05_geological_units_3_classes_EPSG4326&' +
          'outputFormat=application/json&' +
          'srsname=EPSG:4326&' +
          'bbox=' + extent.join(',');
    },
    strategy: ol.loadingstrategy.bbox,
    crossOrigin: null
  });

  var vector_geounits_3 = new ol.layer.Vector({
    source: vector_geounits_3_src,
    style: style_simple
  });

  var map = new ol.Map({
    target: document.getElementById('map-container'),
    view: new ol.View({
      projection: 'EPSG:4326',
      center: [0, 0],
      zoom: 2
    }),
    controls: ol.control.defaults().extend([mousePositionControl]),
    layers: [
      raster_global,
      raster_geounits_3,
      vector_geounits_3,
    ]
  });

  map.on('singleclick', function(evt) {
    document.getElementById('nodelist').innerHTML = "Loading... please wait...";
    var view = map.getView();
    var viewResolution = view.getResolution();
    var source = raster_geounits_3.getSource();
    var url = source.getGetFeatureInfoUrl(
      evt.coordinate, viewResolution, view.getProjection(),
      {'INFO_FORMAT': 'text/html', 'FEATURE_COUNT': 50});
    if (url) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        document.getElementById('nodelist').innerHTML = this.responseText;
      }
      xhr.open("GET", url);
      xhr.send();
    }
  });

  // a normal select interaction to handle click
  var select = new ol.interaction.Select({style: style_selected});
  map.addInteraction(select);

  this.setState({selectedFeatures: select.getFeatures()});

  // a DragBox interaction used to select features by drawing boxes
  var dragBox = new ol.interaction.DragBox({
    condition: ol.events.condition.platformModifierKeyOnly
  });

  map.addInteraction(dragBox);

  dragBox.on('boxend', function() {
    var extent = dragBox.getGeometry().getExtent();
    var selectedFeatures = this.state.selectedFeatures.copy();
    // selectedFeatures.clear();
    vector_geounits_3_src.forEachFeatureInExtent(extent, function(feature) {
      selectedFeatures.push(feature);
    });
    this.setState({selectedFeatures: selectedFeatures});
  });
})
