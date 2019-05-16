var mercury = {
  maps: [
    {
      name: "Hokusai",
      // [minx, miny, maxx, maxy]
      bbox: [0, 21, 90, 65],
      basemap: null,
      layers: {
        // 'multiple' layers can be combined (i.e., check buttons)
        multiple: [
          {
            layerID: "hokusai-3cc-lines",
            layerLabel: "Linear features"
          },
          {
            layerID: "hokusai-3cc-cont",
            layerLabel: "Contacts"
          },
          {
            layerID: "hokusai-3cc-surf",
            layerLabel: "Surfaces"
          },
        ],
        // 'exclusive' layers cannot be combined (i.e., radio buttons)
        exclusive: [
          {
            // 'switchGroup' is used to connect the buttons
            switchGroup: "geological-units",
            selected: true,
            layerID: "hokusai-3cc-cat",
            layerLabel: "3 Categories",
            // 'packagename' means the name of the downloadable package
            packagename: "PM-MER-MS-H05_3cc_01"
          },
          {
            switchGroup: "geological-units",
            layerID: "hokusai-5cc-cat",
            layerLabel: "5 Categories",
            packagename: "PM-MER-MS-H05_5cc_01"
          },
        ]
      }
    },
    { name: "Victoria",
      bbox: [270, -22.5, 360, 65],
    },
    { name: "Rembrandt",
      bbox: [65.75, -51.7, 110, -10],
      package: {
        id: "PM-MER-MSG-Rembrandt_01",
        info: "https://data.planmap.eu/pub/mercury/PM-MER-MSG-Rembrandt_01",
        download: "https://data.planmap.eu/pub/mercury/PM-MER-MSG-Rembrandt_01.zip"
      }
    }
  ]
}

export { mercury };
