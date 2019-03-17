const baseMaps = {
  moon: [
    {
      label: "Hillshade",
      url: "https://s3.amazonaws.com/opmbuilder/301_moon/tiles/w/hillshaded-albedo/{z}/{x}/{y}.png",
      options: {
        maxZoom: 6,
        tms: true,
        autoZIndex: true,
        attribution: "LOLA/USGS <a href='https://github.com/openplanetary/opm/wiki/OPM-Basemaps' target='_blank'>OpenPlanetaryMap</a>"
      }
    },
    // {
    //   label: "LOLA",
    //   url: "http://localhost:8888/moon/wms",
    //   wms: true,
    //   options: {
    //     layers: "moon:Lunar_LRO_LOLA_ClrShade_Global_128ppd_v04",
    //     format: "image/png",
    //     transparent: true,
    //     version: "1.3.0",
    //     attribution: "USGS",
    //     crs: L.CRS.EPSG3857,
    //   }
    // },
  ],
  mars: [
    {
      label: "OPM",
      url: "https://cartocdn-gusc.global.ssl.fastly.net/nmanaud/api/v1/map/named/opm-mars-basemap-v0-1/0,1,2,3,4/{z}/{x}/{y}.png",
      options: {
        maxNativeZoom: 9,
        zoom: 3,
        tms: false,
        autoZIndex: true,
        attribution: "<a href='https://github.com/openplanetary/opm/wiki/OPM-Basemaps' target='_blank'>OpenPlanetaryMap</a>"
      }
    },
    {
      label: "Mola (gray)",
      url: "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-gray/{z}/{x}/{y}.png",
      options: {
        maxNativeZoom: 9,
        tms:true,
        autoZIndex: true,
        attribution: "NASA/MOLA <a href='https://github.com/openplanetary/opm/wiki/OPM-Basemaps' target='_blank'>OpenPlanetaryMap</a>"
      }
    },
    {
      label: "Mola (color)",
      url: "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-color/{z}/{x}/{y}.png",
      options: {
        maxNativeZoom: 6,
        tms: true,
        autoZIndex: true,
        attribution: "NASA/MOLA <a href='https://github.com/openplanetary/opm/wiki/OPM-Basemaps' target='_blank'>OpenPlanetaryMap</a>"
      }
    },
    {
      label: "Viking",
      url: "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/viking_mdim21_global/{z}/{x}/{y}.png",
      options: {
        maxNativeZoom: 7,
        tms:true,
        autoZIndex: true,
        attribution: "NASA/Viking/USGS <a href='https://github.com/openplanetary/opm/wiki/OPM-Basemaps' target='_blank'>OpenPlanetaryMap</a>"
      }
    },
    {
      label: "Texture",
      url: "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/celestia_mars-shaded-16k_global/{z}/{x}/{y}.png",
      options: {
        maxNativeZoom: 5,
        zoom: 3,
        tms: true,
        autoZIndex: true,
        attribution: "Celestia/praesepe <a href='https://github.com/openplanetary/opm/wiki/OPM-Basemaps' target='_blank'>OpenPlanetaryMap</a>"
      }
    },
  ],
  // mercury: [
  //   {
  //     label: "BDR",
  //     url: "http://localhost:8888/mercury/wms",
  //     wms: true,
  //     options: {
  //       layers: "mercury:Mercury_MESSENGER_MDIS_Basemap_BDR_Mosaic_Global_166m",
  //       format: "image/png",
  //       transparent: true,
  //       version: "1.3.0",
  //       attribution: "USGS",
  //       crs: L.CRS.EPSG3857,
  //     }
  //   },
  //   {
  //     label: "DEM",
  //     url: "http://localhost:8888/mercury/wms",
  //     wms: true,
  //     options: {
  //       layers: "mercury:Mercury_Messenger_USGS_DEM_Global_665m_v2",
  //       format: "image/png",
  //       transparent: true,
  //       version: "1.3.0",
  //       attribution: "USGS",
  //       crs: L.CRS.EPSG3857,
  //     }
  //   },
  // ]
}

const overlayMaps = {
  mars: [
    {
      label: "OPM Labels",
      url: "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-1/5/{z}/{x}/{y}.png",
      options: {
        tms: false,
        autoZIndex: true,
        opacity: 1,
        attribution: "USGS"
      }
    }
  ]
}

const Maps = {
  basemaps: baseMaps,
  overlays: overlayMaps,
  bodies: function(mtype) {
    mtype = mtype || 'basemap';
    var out = null;
    if (['basemap','overlay'].indexOf(mtype) == -1) {
      console.log("Wrong argument. Accepted arguments are: 'basemap', 'overlay'.");
      return out;
    }
    if (mtype=='basemap') {
      out = Object.keys(this.basemaps);
    } else {
      out = Object.keys(this.overlays);
    }
    return out;
  }
}

export { baseMaps, overlayMaps, Maps };
