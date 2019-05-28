export var mars = {
  basemap: {
      typename: 'USGS_mars_global_shade.EPSG4326',
    },
  maps: [
    {
      name: 'Crommelin',
      pm_id: 'PM-MAR-MS-Crommelin_01',
      center: {lat:5.1, lon:-10.2},
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
      layers: {
        main: {
          wms: true,
          typename: 'mars:PM-MAR-MS-Arsinoes_01'
        }
      }
    }
  ]
};
