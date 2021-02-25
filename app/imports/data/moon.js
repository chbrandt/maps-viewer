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
    {
      "name": "C-SPAA1_SU",
      "pm_id": "PM-MOO-C-SPAA1_SU",
      "center": {
        "lon": -0.5212299229433057,
        "lat": -41.505238566679424
      },
      "bbox": {
        "xmin": 168.98812536405217,
        "xmax": -170.03058520993878,
        "ymin": -50.015761589336094,
        "ymax": -32.994715544022746,
        "srs": "EPSG:4326"
      }
    },
    {
      "name": "C-SPAApollo_SU",
      "pm_id": "PM-MOO-C-SPAApollo_SU",
      "center": {
        "lon": 152.20919248953078,
        "lat": -35.068551464452476
      },
      "bbox": {
        "xmin": 139.4775555886468,
        "xmax": 164.94082939041473,
        "ymin": -46.60708597945655,
        "ymax": -23.530016949448402,
        "srs": "EPSG:4326"
      }
    }
  ]
};
