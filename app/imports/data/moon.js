/*
{
  body: <string>, // name of the body we are handling
  maps: [         // list of maps (planmap packages), raster + vector
    {
      label: <string>, // a label/name to the map (e.g, Apollo)
      packageID: <string>, // (planmap) packageID (e.g, PM-MOO-MS-SPAApollo_01)
      bbox: [4 * <float>], // [xmin, ymin, xmax, ymax]
      layers: {            // set of vector and raster layers
        vector: [           // list of vector layers
          {
            layerID: <string>,
            layerLabel: <string>,
            wfs: {
              typename: <string>
            }
          }
        ],
        raster: [           // list of raster layers

        ]
      }
    }
  ]
}
*/
export var moon = {
  body: "moon",
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
