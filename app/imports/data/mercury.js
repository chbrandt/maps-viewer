export var mercury = {
  basemap: {
      typename: 'mercury:USGS_Mercury_MESSENGER_MDIS_Basemap_LOI_Mosaic_Global_166m.EPSG4326_small.tif'
    },
  maps: [
    {
      name: 'Hokusai - 3 classes',
      pm_id: 'PM-MER-MS-H05_3cc_01',
      center: {lat:58.3, lon:17.7},
      bbox: {
        xmin: 0,
        ymin: 22.5,
        xmax: 90,
        ymax: 65,
        srs: 'EPSG:4326'
      },
      layers: {
        main: {
          wms: true,
          typename: 'mercury:PM-MER-MS-H05_3cc_01'
        }
      },
    },
    {
      name: 'Hokusai - 5 classes',
      pm_id: 'PM-MER-MS-H05_5cc_01',
      center: {lat:58.3, lon:17.7},
      bbox: {
        xmin: 0,
        ymin: 22.5,
        xmax: 90,
        ymax: 65,
        srs: 'EPSG:4326'
      },
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
      bbox: {
        xmin: 65.7,
        ymin: -51.9,
        xmax: 110,
        ymax: -10,
        srs: 'EPSG:4326'
      },
      layers: {
        main: {
          wms: true,
          typename: 'mercury:PM-MER-MS-Rembrandt_01'
        }
      }
    }
  ]
};
