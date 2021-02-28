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
    },
    {
      "name": "C-Arsinoes",
      "pm_id": "PM-MAR-C-Arsinoes",
      "center": {
        "lon": -28.354948058817456,
        "lat": -13.0749921424451
      },
      "bbox": {
        "xmin": -28.469381174203818,
        "xmax": -28.240514943431094,
        "ymin": -13.169841214236444,
        "ymax": -12.980143070653755,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "C-Crommelin",
      "pm_id": "PM-MAR-C-Crommelin",
      "center": {
        "lon": -10.309911318473496,
        "lat": 7.279592356400499
      },
      "bbox": {
        "xmin": -10.844780922334394,
        "xmax": -9.775041714612598,
        "ymin": 4.39276139195179,
        "ymax": 10.166423320849209,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "D-Crommelin",
      "pm_id": "PM-MAR-D-Crommelin",
      "center": {
        "lon": -10.082045000000022,
        "lat": 5.09877
      },
      "bbox": {
        "xmin": -11.152300000000025,
        "xmax": -9.011790000000019,
        "ymin": 3.96993,
        "ymax": 6.22761,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "D-Gale_Kimberley",
      "pm_id": "PM-MAR-D-Gale_Kimberley",
      "center": {
        "lon": 137.395975,
        "lat": -4.6430299999999995
      },
      "bbox": {
        "xmin": 137.37318,
        "xmax": 137.41877,
        "ymin": -4.66744,
        "ymax": -4.61862,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "D-Jezero",
      "pm_id": "PM-MAR-D-Jezero",
      "center": {
        "lon": 77.3725,
        "lat": 18.47486
      },
      "bbox": {
        "xmin": 77.20333,
        "xmax": 77.54167,
        "ymin": 18.335,
        "ymax": 18.61472,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "D-Oxia_Planum",
      "pm_id": "PM-MAR-D-Oxia_Planum",
      "center": {
        "lon": 25.46653,
        "lat": 18.145690000000002
      },
      "bbox": {
        "xmin": 25.25278,
        "xmax": 25.68028,
        "ymin": 17.34694,
        "ymax": 18.94444,
        "srs": "EPSG:4326"
      }
    }
  ]
};
