export var mercury = {
  basemap: {
      typename: 'mercury:mercury_global_MD3Color_665m_EPSG4326'
    },
  maps: [
    {
      name: 'Hokusai - 3 classes',
      pm_id: 'PM-MER-MS-H05_3cc_01',
      center: {lat:58.3, lon:17.7},
      layers: {
        main: {
          wms: true,
          typename: 'mercury:PM-MER-MS-H05_3cc_01'
        }
      }
    },
    {
      name: 'Hokusai - 5 classes',
      pm_id: 'PM-MER-MS-H05_5cc_01',
      center: {lat:58.3, lon:17.7},
      layers: {
        main: {
          wms: true,
          typename: 'mercury:PM-MER-MS-H05_5cc_01'
        }
      }
    },
    {
      name: 'Rembrandt',
      pm_id: 'PM-MER-MS-Rembrandt_01',
      center: {lat:-33.2, lon:88.2},
      layers: {
        main: {
          wms: true,
          typename: 'mercury:PM-MER-MS-Rembrandt_01'
        }
      }
    }
  ]
};
