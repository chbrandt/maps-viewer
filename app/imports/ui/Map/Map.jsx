import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

// Load basemaps and overlays definitions
import { baseMaps, overlayMaps } from '/imports/api/basemaps.js';


export default class Map extends React.Component {
  constructor(props) {
    super(props);

    let bodiesList = Object.keys(baseMaps);
    if (bodiesList.indexOf(this.props.body) == -1) {
      throw "ValueError: was expecting 'props.body' to be among: " + JSON.stringify(bodiesList);
    }

    this.setMap = this.setMap.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.body == this.props.body) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <div id='map' style={{width:'100%', height:'100%'}}/>
        <div id='nodelist'/>
      </div>
    )
  }

  componentDidMount() {
    this.map = this.setMap(this.props.body);
    // this.map.panTo([10,100]);

    // Tracker.autorun(() => {
    //   var latlng = Session.get('latlng');
    //   var _ll = L.latLng(latlng[0],latlng[1]);
    //   console.log("LatLng: " + JSON.stringify(latlng));
    //   console.log(latlng);
    //   // console.log(_ll);
    //   // console.log(this.map.getCenter());
    //   if (latlng) {
    //     this.map.panTo(_ll);
    //     // console.log(this.map.getCenter());
    //   }
    // });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.map.setTarget(null);
    this.map = null;
    this.map = this.setMap(this.props.body);
  }

setMap(body) {
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
    target: 'map',
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

  // clear selection when drawing a new box and when clicking on the map
  // dragBox.on('boxstart', function() {
  //   this.state.selectedFeatures.clear();
  // });

  return map;
}
}
