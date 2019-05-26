export var mars = {
  basemap: {
      typename: 'mars:Mars_global_color_Viking.EPSG4326',
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
    }
  ]
};
