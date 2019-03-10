import React from 'react';

/*
  Leaflet style, `leaflet.css`, is being loaded in <head />, wherever it is.

  All tentatives of loading it here, through js calls, failed.
  Apparently, there are solutions through webpack.conf hacks or plugins; E.g.:
  * https://github.com/ghybs/leaflet-defaulticon-compatibility.

  Also, for Meteor and React there are some third-party libs for Leaflet:
  * https://github.com/bevanhunt/meteor-leaflet;
  * https://github.com/PaulLeCam/react-leaflet;
  I am currently using the official one available through `npm`. The downside,
  again -- to make it clear --, for me using Meteor and React, is that the CSS
  has to be loaded in the `<head/>` element of `client/main.html` and (regarding
  React now) the map initialization has to be done in `componentDidMount`.
 */
import L from 'leaflet';

// Load basemaps and overlays definitions
import { baseMaps, overlayMaps } from './basemaps.js';

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.body = this.props.body;
    let bodiesList = Object.keys(baseMaps);
    if (bodiesList.indexOf(this.body) == -1) {
      throw "ValueError: was expecting 'props.body' to be among: " + JSON.stringify(bodiesList);
    }
  }

  render() {
    return <div id='map' style={{height:'100%', width:'100%'}}/>;
  }

  componentDidMount() {
    // Name of the body (planet, sattelite)
    const body = this.body;

    // TODO: read the map parameters from `basemap.js`.
    var map = L.map('map', {
                              center: [0, 0],
                              maxBounds:[[-90,-180],[90,180]],
                              zoom: 3,
                            });

    // Load all basemaps for 'body', the last basemap loaded will be the default.
    var bmSet = {}
    var bm;
    baseMaps[body].forEach((pars) => {
      bm = new L.tileLayer(pars.url, pars.options);
      bmSet[pars.label] = bm;
    });
    bm.addTo(map);

    // Load the overlays for 'body', if any.
    var omSet = {}
    // var om;
    // if (overlayMaps[body]) {
    //   overlayMaps[body].forEach((pars) => {
    //     om = new L.tileLayer(pars.url, pars.options);
    //     omSet[pars.label] = om;
    //   })
    //   // om.addTo(map);
    // }

    // Make the layers control (basemaps, overlays)
    L.control.layers(bmSet, omSet, {
      position: 'topright'
    }).addTo(map);

    /*
      Connect any map "move" event to the update of global 'bbox' variable.
      The 'bbox' variable is being watched by the connection with the MongoDB,
      at the App's sbuscription point to 'data_geo' Collection.
      (see App.js/withTracker())
      */
    map.on('moveend', (event) => {
      let bounds = map.getBounds();
      let bbox = [
        [bounds.getWest(), bounds.getSouth()],
        [bounds.getEast(), bounds.getNorth()]
      ];
      console.log("We moved! " + JSON.stringify(bbox));
    });

    // We will need the 'map' in other moments of the Component's life-cycle..
    this.map = map;
  }
}
