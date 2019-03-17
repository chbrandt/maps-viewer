import React from 'react';

//  Leaflet style, `leaflet.css`, is being loaded in <head />, wherever it is.
import L from 'leaflet';

import './plugins/leaflet_control_infobox.js';

// Load basemaps and overlays definitions
import { baseMaps, overlayMaps } from '/imports/api/basemaps.js';


export default class Map extends React.Component {
  constructor(props) {
    super(props);

    let bodiesList = Object.keys(baseMaps);
    if (bodiesList.indexOf(this.props.body) == -1) {
      throw "ValueError: was expecting 'props.body' to be among: " + JSON.stringify(bodiesList);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.body == this.props.body) {
      return false;
    }
    return true;
  }

  render() {
    return <div id='map' style={{width:'100%', height:'100%'}}/>;
  }

  componentDidMount() {
    this.map = setMap(this.props.body);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.map.off();
    this.map.remove();
    this.map = setMap(this.props.body);
  }
}

function setMap(body) {
  var map = L.map('map', {center: [0, 0],
                          maxBounds:[[-90,-180],[90,180]],
                          zoom: 3});

  var bmSet = {}
  var bm;
  baseMaps[body].forEach((pars) => {
    if (pars.wms) {
      bm = new L.tileLayer.wms(pars.url, pars.options);
    } else {
      bm = new L.tileLayer(pars.url, pars.options);
    }
    bmSet[pars.label] = bm;
  });
  bm.addTo(map);

  var omSet = {}
  // var om;
  // if (overlayMaps[body]) {
  //   overlayMaps[body].forEach((pars) => {
  //     om = new L.tileLayer(pars.url, pars.options);
  //     omSet[pars.label] = om;
  //   })
  //   // om.addTo(map);
  // }

  L.control.layers(bmSet, omSet, {position: 'topright'}).addTo(map);

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
  });

  var zoombox = L.control.infobox({position:'bottomleft'}).addTo(map);

  map.on('zoomend', (event) => {
    var zoom = map.getZoom();
    zoombox.setValue(zoom);
  })

  // We will need the 'map' in other moments of the Component's life-cycle..
  return map;
}
