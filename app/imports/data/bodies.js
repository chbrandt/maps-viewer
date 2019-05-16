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
            // 'layerGroup' is used to connect the buttons
            layerGroup: "geological-units",
            selected: true,
            layerID: "hokusai-3cc-cat",
            layerLabel: "3 Categories",
            // 'packagename' means the name of the downloadable package
            packagename: "PM-MER-MS-H05_3cc_01"
          },
          {
            layerGroup: "geological-units",
            layerID: "hokusai-5cc-cat",
            layerLabel: "5 Categories",
            packagename: "PM-MER-MS-H05_5cc_01"
          },
        ]
      }
    }
  ]
}

var bodies = [
  { name: "Mercury", data : mercury }
];

export { bodies };
