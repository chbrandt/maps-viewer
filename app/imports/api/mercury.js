import { Meteor } from 'meteor/meteor';

var geoserver_url = Meteor.settings.public.geoserver.url;
console.log('Geoserver-URL: ' + JSON.stringify(geoserver_url));

export function build (data) {
  console.log(data);

  var format = 'image/png';

  var workspace = 'mercury';

  // GLOBAL MAP
  var global_basemap = data.basemap;

  var raster_global = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: geoserver_url + '/wms',
      params: {LAYERS: global_basemap.typename}
    })
  });

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

  // var legend_url = '/wms?REQUEST=GetLegendGraphic&service=WMS&version=1.1.1' +
  //                   '&FORMAT=image/png&WIDTH=20&HEIGHT=20' +
  //                   '&LAYER=mercury:PM-MER-MS-H05_3cc_01';
  // document.getElementById('legend').src = geoserver_url + legend_url;

  layers.unshift(raster_global);
  return layers;
}
