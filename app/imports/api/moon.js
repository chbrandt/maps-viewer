import { Meteor } from 'meteor/meteor';

var geoserver_url = Meteor.settings.public.geoserver.url;
console.log('Geoserver-URL: ' + JSON.stringify(geoserver_url));

export function build () {

  var format = 'image/png';

  var workspace = 'moon'

  // --------------------------------------------------------------------------
  // STYLES
  var style_simple = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#F00',
      width: 2
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

  var lonLabelStyle = new ol.style.Text({
    font: '12px Calibri,sans-serif',
    textBaseline: 'bottom',
    fill: new ol.style.Fill({
      color: 'rgba(0,0,0,1)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(255,255,255,1)',
      width: 3
    })
  });

  var latLabelStyle = new ol.style.Text({
    font: '12px Calibri,sans-serif',
    textAlign: 'end',
    fill: new ol.style.Fill({
      color: 'rgba(0,0,0,1)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(255,255,255,1)',
      width: 3
    })
  });
  // --------------------------------------------------------------------------

  var mousePositionControl = new ol.control.MousePosition({
          className: 'custom-mouse-position',
          target: document.getElementById('location'),
          coordinateFormat: ol.coordinate.createStringXY(5),
          undefinedHTML: '&nbsp;'
        });


  // --------------------------------------------------------------------------
  // GLOBAL MAP
  var raster_global = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: geoserver_url + '/' + workspace + '/wms',
      params: {LAYERS: 'moon:moon_global_color_lola_bluesteel.EPSG4326'}
    })
  });
  // --------------------------------------------------------------------------

  var vector_layer = new ol.layer.Vector({
    // name: 'layerOne',
    // map: map,
    source: new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url: function(extent) {
        return geoserver_url + '/wfs?' +
            'typename=moon:PM-MOO-MS-SPAApollo_01.EPSG4326&' +
            'service=WFS&version=1.1.0&request=GetFeature&' +
            'outputFormat=application/json&' +
            'srsname=EPSG:4326&' +
            'bbox=' + extent.join(',');
      },
      strategy: ol.loadingstrategy.bbox,
      crossOrigin: null
    }),
    style: style_simple
  });
  vector_layer.name = 'layerOne';

  var map = new ol.Map({
    target: document.getElementById('map-container'),
    view: new ol.View({
      projection: 'EPSG:4326',
      center: [0, 0],
      zoom: 3
    }),
    // controls: ol.control.defaults().extend([mousePositionControl]),
    layers: [
      raster_global,
      vector_layer
    ]
  });



  // Create the graticule component
  var graticule = new ol.Graticule({
    // the style to use for the lines, optional.
    strokeStyle: new ol.style.Stroke({
      color: 'rgba(255,120,0,0.9)',
      width: 1,
      lineDash: [0.5, 4]
    }),
    latLabelFormatter: function(lat){ return lat; },
    latLabelStyle: latLabelStyle,
    lonLabelFormatter: function(lon){ return lon; },
    lonLabelStyle: lonLabelStyle,
    showLabels: true
  });

  graticule.setMap(map);
  // // a normal select interaction to handle click
  // var select = new ol.interaction.Select({style: style_selected});
  // map.addInteraction(select);
  //
  // var selectedFeatures = select.getFeatures();
  //
  // // a DragBox interaction used to select features by drawing boxes
  // var dragBox = new ol.interaction.DragBox({
  //   condition: ol.events.condition.platformModifierKeyOnly
  // });
  //
  // map.addInteraction(dragBox);
  //
  // dragBox.on('boxend', function() {
  //   var extent = dragBox.getGeometry().getExtent();
  //   // selectedFeatures.clear();
  //   vector_geounits_3_src.forEachFeatureInExtent(extent, function(feature) {
  //     selectedFeatures.push(feature);
  //   });
  // });

  return map;
}
