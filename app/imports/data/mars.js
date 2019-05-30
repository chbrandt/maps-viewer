export var mars = {
  basemap: {
      typename: 'USGS_mars_global_shade.EPSG4326',
    },
  maps: [
    {
      name: 'Crommelin',
      pm_id: 'PM-MAR-MS-Crommelin_01',
      center: {lat:5.1, lon:-10.2},
      bbox: {
        xmin: -11.153,
        ymin: 3.99,
        xmax: -9.011,
        ymax: 6.27,
        srs: 'EPSG:4326'
      },
      layers: {
        main: {
          wms: true,
          typename: 'mars:PM-MAR-MS-Crommelin_01'
        }
      }
    },
    {
      name: 'Arsinoes',
      pm_id: 'PM-MAR-MS-Arsinoes_01',
      center: {lat:-7.7, lon:-27.9},
      bbox: {
        xmin: -30.283,
        ymin: -12.07,
        xmax: -25.485,
        ymax: -5.9,
        srs: 'EPSG:4326'
      },
      layers: {
        main: {
          wms: true,
          typename: 'mars:PM-MAR-MS-Arsinoes_01'
        }
      }
    }
  ]
};
