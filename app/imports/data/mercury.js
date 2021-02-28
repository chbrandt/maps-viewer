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
    },
    {
      "name": "C-H05",
      "pm_id": "PM-MER-C-H05",
      "center": {
        "lon": 45.0,
        "lat": 41.54220721341649
      },
      "bbox": {
        "xmin": -30.714484761943538,
        "xmax": 120.71448476194354,
        "ymin": 13.091121170480866,
        "ymax": 69.99329325635212,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "GS-Rachmaninoff_5cc",
      "pm_id": "PM-MER-GS-Rachmaninoff_5cc",
      "center": {
        "lon": 59.47397121882588,
        "lat": 30.61115236772526
      },
      "bbox": {
        "xmin": 49.80169421251481,
        "xmax": 69.14624822513696,
        "ymin": 20.48527974357724,
        "ymax": 40.73702499187328,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "MS-H02_3cc",
      "pm_id": "PM-MER-MS-H02_3cc",
      "center": {
        "lon": -44.99551896775006,
        "lat": 41.53971161862111
      },
      "bbox": {
        "xmin": -120.7027414597847,
        "xmax": 30.71170352428458,
        "ymin": 13.090201625609833,
        "ymax": 69.98922161163239,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "MS-Lermontov",
      "pm_id": "PM-MER-MS-Lermontov",
      "center": {
        "lon": -49.32180250771265,
        "lat": 15.485607583122809
      },
      "bbox": {
        "xmin": -56.500312041275436,
        "xmax": -42.14329297414986,
        "ymin": 9.960975880004842,
        "ymax": 21.010239286240775,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "C-Beethoven",
      "pm_id": "PM-MER-C-Beethoven",
      "center": {
        "lon": -125.25,
        "lat": -21.35
      },
      "bbox": {
        "xmin": -132.3,
        "xmax": -118.19999999999999,
        "ymin": -27.7,
        "ymax": -15.0,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "C-H05_SU",
      "pm_id": "PM-MER-C-H05_SU",
      "center": {
        "lon": 45.0,
        "lat": 43.75
      },
      "bbox": {
        "xmin": 0.0,
        "xmax": 90.0,
        "ymin": 22.5,
        "ymax": 65.0,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "C-Rembrandt",
      "pm_id": "PM-MER-C-Rembrandt",
      "center": {
        "lon": 87.5,
        "lat": -33.0
      },
      "bbox": {
        "xmin": 75.0,
        "xmax": 100.0,
        "ymin": -41.0,
        "ymax": -25.0,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "D-Rembrandt",
      "pm_id": "PM-MER-D-Rembrandt",
      "center": {
        "lon": 87.875,
        "lat": -30.85
      },
      "bbox": {
        "xmin": 65.75,
        "xmax": 110.0,
        "ymin": -51.7,
        "ymax": -10.0,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "MS-Beethoven",
      "pm_id": "PM-MER-MS-Beethoven",
      "center": {
        "lon": -70.0,
        "lat": -17.5
      },
      "bbox": {
        "xmin": -140.0,
        "xmax": 0.0,
        "ymin": -35.0,
        "ymax": 0.0,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "MS-H10_3cc",
      "pm_id": "PM-MER-MS-H10_3cc",
      "center": {
        "lon": 35.99897912818639,
        "lat": -0.0020669677150522148
      },
      "bbox": {
        "xmin": -0.003906250396028099,
        "xmax": 72.00186450676881,
        "ymin": -22.504180134697325,
        "ymax": 22.50004619926722,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "MS-H10_5cc",
      "pm_id": "PM-MER-MS-H10_5cc",
      "center": {
        "lon": 35.99897912818639,
        "lat": -0.0020669677150522148
      },
      "bbox": {
        "xmin": -0.003906250396028099,
        "xmax": 72.00186450676881,
        "ymin": -22.504180134697325,
        "ymax": 22.50004619926722,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "MS-H14_3cc",
      "pm_id": "PM-MER-MS-H14_3cc",
      "center": {
        "lon": 45.00045050131392,
        "lat": -36.63941120082429
      },
      "bbox": {
        "xmin": -62.393829766072486,
        "xmax": 152.39473076870033,
        "ymin": -80.25669145451333,
        "ymax": 6.977869052864745,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "MS-H14_5cc",
      "pm_id": "PM-MER-MS-H14_5cc",
      "center": {
        "lon": 45.00045050131392,
        "lat": -36.63941120082429
      },
      "bbox": {
        "xmin": -62.393829766072486,
        "xmax": 152.39473076870033,
        "ymin": -80.25669145451333,
        "ymax": 6.977869052864745,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "SI-Rembrandt",
      "pm_id": "PM-MER-SI-Rembrandt",
      "center": {
        "lon": 87.875,
        "lat": -30.85
      },
      "bbox": {
        "xmin": 65.75,
        "xmax": 110.0,
        "ymin": -51.7,
        "ymax": -10.0,
        "srs": "EPSG:4326"
      }
    }
  ]
};
