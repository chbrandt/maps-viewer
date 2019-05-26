import { Meteor } from 'meteor/meteor';

var geoserver_url = Meteor.settings.public.geoserver.url;
console.log('Geoserver-URL: ' + JSON.stringify(geoserver_url));

export function build (data) {
  var format = 'image/png';

  var workspace = 'mars';

  // --------------------------------------------------------------------------
  // STYLES
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

  // --------------------------------------------------------------------------

  // GLOBAL MAP
  var global_basemap = data.basemap;

  var raster_global = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      // url: geoserver_url + '/' + workspace + '/wms',
      url: geoserver_url + '/wms',
      params: {LAYERS: global_basemap.typename}
      // params: {LAYERS: 'mars:Mars_global_color_Viking.EPSG4326'}
    })
  });
  // --------------------------------------------------------------------------


  // var vector = new ol.layer.Vector({
  //   source: new ol.source.Vector({
  //     format: new ol.format.GeoJSON(),
  //     url: function(extent) {
  //       return geoserver_url + '/wfs?' +
  //           'service=WFS&version=1.1.0&request=GetFeature&' +
  //           'typename=mars:PM-MAR-MS-Crommelin_01_Surrounding_terrains&' +
  //           'outputFormat=application/json&' +
  //           'srsname=EPSG:4326&' +
  //           'bbox=' + extent.join(',');
  //     },
  //     strategy: ol.loadingstrategy.bbox,
  //     crossOrigin: null
  //   }),
  //   // style: style_simple
  // });
  // vector.setVisible(false);
  // vector.name = 'PM-MAR-MS-Crommelin_01';

  var layers = [];
  for (var map_ of data.maps) {

    var marker = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Point([map_.center.lon, map_.center.lat]),
            name: 'Null Island',
            population: 4000,
            rainfall: 500
          })
        ]
      })
    });
    marker.setVisible(true);
    marker.name = map_.pm_id;
    marker.role = 'marker';
    layers.push(marker);

    var geounits = map_.layers.main;
    var raster = new ol.layer.Tile({
      visible: true,
      opacity: 1,
      source: new ol.source.TileWMS({
        url: geoserver_url + '/wms',
        params: {'FORMAT': format,
                 'VERSION': '1.1.1',
                 tiled: true,
                 "LAYERS": geounits.typename,
              "exceptions": 'application/vnd.ogc.se_inimage',
        }
      })
    });
    raster.setVisible(false);
    raster.name = map_.pm_id;
    raster.role = 'main';
    layers.push(raster);
  }
  console.log(layers);

  var legend_url = '/wms?REQUEST=GetLegendGraphic&service=WMS&version=1.1.1&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=mars:PM-MAR-MS-Crommelin_01&bbox=-11.42157996093972,3.6993348090528655,-10.859606114070235,4.150676173873131&srcwidth=574&srcheight=461&srs=EPSG:4326'
  document.getElementById('legend').src = geoserver_url + legend_url;
  // map.on('moveend', function(evt) {
  //   console.log(evt);
  //   var extent = evt.frameState.extent;
  //   var srcwidth = evt.frameState.size[0];
  //   var srcheight = evt.frameState.size[1];
  //   // var legend_url = '/wms?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=mars:PM-MAR-MS-Crommelin_01' +
  //   // '&LEGEND_OPTIONS=grouplayout:horizontal;forceLabels:on' +
  //   // '&bbox=' + extent.join(',') +
  //   // '&srcwidth=' + srcwidth +
  //   // '&srcheight=' + srcheight +
  //   // '&srs=EPSG:4326';
  //   var legend_url = '/wms?REQUEST=GetLegendGraphic&service=WMS&version=1.1.1&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=mars:PM-MAR-MS-Crommelin_01_Units_Secondary_Craters_Related&bbox=-11.42157996093972,3.6993348090528655,-10.859606114070235,4.150676173873131&srcwidth=574&srcheight=461&srs=EPSG:4326'
  //   document.getElementById('legend').src = geoserver_url + legend_url;
  // })

  // map.on('singleclick', function(evt) {
  //   document.getElementById('nodelist').innerHTML = "Loading... please wait...";
  //   var view = map.getView();
  //   var viewResolution = view.getResolution();
  //   var source = raster.getSource();
  //   var url = source.getGetFeatureInfoUrl(
  //     evt.coordinate, viewResolution, view.getProjection(),
  //     {'INFO_FORMAT': 'text/html', 'FEATURE_COUNT': 50});
  //   if (url) {
  //     var xhr = new XMLHttpRequest();
  //     xhr.onload = function() {
  //       document.getElementById('nodelist').innerHTML = this.responseText;
  //     }
  //     xhr.open("GET", url);
  //     xhr.send();
  //   }
  // });

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

  layers.unshift(raster_global);
  return layers;
}
