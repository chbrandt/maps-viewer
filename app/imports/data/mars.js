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
    }
  ]
};
