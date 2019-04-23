import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

import proj4 from 'proj4';
// import {register} from 'ol/proj/proj4';
// import {get as getProjection} from 'ol/proj';


//  Leaflet style, `leaflet.css`, is being loaded in <head />, wherever it is.
// import L from 'leaflet';
//
// import './plugins/Leaflet.SimpleGraticule/L.SimpleGraticule.js';
// import './plugins/leaflet_control_infobox.js';

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
    // this.map.panTo([10,100]);

    // Tracker.autorun(() => {
    //   var latlng = Session.get('latlng');
    //   var _ll = L.latLng(latlng[0],latlng[1]);
    //   console.log("LatLng: " + JSON.stringify(latlng));
    //   console.log(latlng);
    //   // console.log(_ll);
    //   // console.log(this.map.getCenter());
    //   if (latlng) {
    //     this.map.panTo(_ll);
    //     // console.log(this.map.getCenter());
    //   }
    // });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // this.map.off();
    // this.map.remove();
    this.map.setTarget(null);
    this.map = null;
    this.map = setMap(this.props.body);
  }
}

function setMap(body) {
  proj4.defs('EPSG:999999',
    '+proj=merc +a=2439700 +b=2439700 ' +
    '+lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 ' +
    '+units=m +nadgrids=@null +wktext +no_defs');
  ol.proj.proj4.register(proj4);
  const mercury_mercator = ol.proj.get('EPSG:999999');
  var map = new ol.Map({
    target: 'map',
    view: new ol.View({
      projection: mercury_mercator,
      center: ol.proj.fromLonLat([0,0]),
      zoom: 2
    })
  });

  // var map = L.map('map', {center: [0, 0],
  //                         maxBounds:[[-90,-180],[90,180]],
  //                         zoom: 3});

  var bmSet = {}
  var bm;
  baseMaps[body].forEach((pars) => {
    if (pars.wms || pars.service == 'wms') {
      bm = new ol.layer.Tile({
        source: new ol.source.WMTS({
          ...pars.options
        })
      })
    } else if (pars.service == 'tms'){
      bm = new ol.layer.Tile({
        source: new ol.source.XYZ({
          ...pars.options
        })
      })
    }
    bmSet[pars.label] = bm;
  });
  map.addLayer(bm)
  // bm.addTo(map);

  //
  var omSet = {}
  var om;
  if (overlayMaps[body]) {
    overlayMaps[body].forEach((pars) => {
      if (pars.wms) {
        om = new ol.layer.Tile({
          source: new ol.source.TileWMS({
            url: pars.url
          })
        })
      } else {
        om = new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: pars.url
          })
        })
      }
      omSet[pars.label] = om;
      map.addLayer(om)
    })
  }
  //
  // L.control.layers(bmSet, omSet, {position: 'topright'}).addTo(map);
  //
  // var options_ = {interval: 20,
  //              showOriginLabel: true,
  //              redraw: 'move',
  //              zoomIntervals: [
  //               {start: 0, end: 3, interval: 50},
  //               {start: 4, end: 5, interval: 5},
  //               {start: 6, end: 20, interval: 1}
  //           ]};
  // L.simpleGraticule(options_).addTo(map);
  //
  // /*
  //   Connect any map "move" event to the update of global 'bbox' variable.
  //   The 'bbox' variable is being watched by the connection with the MongoDB,
  //   at the App's sbuscription point to 'data_geo' Collection.
  //   (see App.js/withTracker())
  //   */
  // map.on('moveend', (event) => {
  //   let bounds = map.getBounds();
  //   let bbox = [
  //     [bounds.getWest(), bounds.getSouth()],
  //     [bounds.getEast(), bounds.getNorth()]
  //   ];
  // });
  //
  // var zoombox = L.control.infobox({position:'bottomleft'}).addTo(map);
  //
  // map.on('zoomend', (event) => {
  //   var zoom = map.getZoom();
  //   zoombox.setValue(zoom);
  // })
  //
  // We will need the 'map' in other moments of the Component's life-cycle..
  return map;
}
