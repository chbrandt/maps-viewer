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
    if (map_.layers) {
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
      layers.unshift(raster);
    } else {
      var pol = new ol.Feature({
                  geometry: new ol.geom.Polygon.fromExtent([map_.bbox.xmin, map_.bbox.ymin,
                                                            map_.bbox.xmax, map_.bbox.ymax]),
                  name: map_.pm_id
                })
      pol.set('description', map_.pm_id);
      pol.setStyle(function() {
        return [
          new ol.style.Style({
              fill: new ol.style.Fill({
              color: 'rgba(255,255,255,0.4)'
            }),
            stroke: new ol.style.Stroke({
              color: '#3399CC',
              width: 1.2
            }),
            text: new ol.style.Text({
              font: '12px Calibri,sans-serif',
              fill: new ol.style.Fill({ color: '#000' }),
              stroke: new ol.style.Stroke({
                color: '#fff', width: 2
              }),
              text: map_.pm_id
            })
          })
        ];
      });
      var bbox = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [
            pol
          ]
        })
      });
      bbox.setVisible(false);
      bbox.name = map_.pm_id;
      bbox.role = 'main';
      layers.unshift(bbox);
    }
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
    layers.unshift(marker);
  }
  console.log(layers);
  layers.unshift(raster_global);
  return layers;
}
