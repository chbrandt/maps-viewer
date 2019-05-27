export var moon = {
  basemap: {
      typename: 'moon:moon_global_color_lola_bluesteel.EPSG4326'
    },
  maps: [
    {
      name: 'Apollo',
      pm_id: 'PM-MOO-MS-SPAApollo_01',
      center: {lat:-36.1, lon:-151.8},
      layers: {
        main: {
          wms: true,
          typename: 'moon:PM-MOO-MS-SPAApollo_01'
        }
      }
    },
  ]
};
