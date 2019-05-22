/*
*/
export var moon = {
  name: "moon",
  maps: [
    {
      name: "Apollo",
      packageID: "PM-MOO-MS-SPAApollo_01",
      bbox: [-162.33083593,  -44.06403013, -141.54798794,  -26.36184929],
      layers: {
        vector: [
          {
            layerID: "layerOne",
            layerLabel: "Linear features",
            wfs: {
              typename: "moon:PM-MOO-MS-SPAApollo_01.EPSG4326",
            }
          }
        ]
      }
    },
  ]
}
