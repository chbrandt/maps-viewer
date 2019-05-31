export var moon = {
  basemap: {
      typename: 'moon:USGS_moon_global_wac.EPSG4326'
    },
  maps: [
    {
      name: 'Apollo',
      pm_id: 'PM-MOO-MS-SPAApollo_01',
      center: {lat:-36.1, lon:-151.8},
      bbox: {
        xmin: -175,
        ymin: -60.2,
        xmax: -125,
        ymax: -10,
        srs: 'EPSG:4326'
      },
      layers: {
        main: {
          wms: true,
          typename: 'moon:PM-MOO-MS-SPAApollo_01'
        }
      }
    },
    {
      name: 'Copernicus',
      pm_id: 'PM-MOO-MS-Copernicus_01',
      center: {lat:9.62, lon:-20.08},
      bbox: {
        xmin: -21.73,
        ymin: 8.015,
        xmax: -18.38,
        ymax: 11.38,
        srs: 'EPSG:4326'
      },
      layers: {
        main: {
          wms: true,
          typename: 'moon:PM-MOO-MS-Copernicus_01'
        }
      }
    },
  ]
};
