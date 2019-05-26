import { Meteor } from 'meteor/meteor';

import { bodies } from '/imports/data/bodies.js';

import { build as build_mercury } from './mercury.js';
import { build as build_moon } from './moon.js';
import { build as build_mars } from './mars.js';

var geoserver_url = Meteor.settings.public.geoserver.url;
console.log('Geoserver-URL: ' + JSON.stringify(geoserver_url));

class OLMap {
  constructor() {
    this._map = null;
  }

  getMap() {
    return this._map;
  }

  clean() {
    this._map.setTarget(null);
    this._map = null;
  }

  build(body) {
    if (this._map) {
      this.clean();
    }
    var layers;
    var map;
    var data;
    for (var obj of bodies) {
      if (obj.name == body) {
        data = obj.data;
      }
    }
    if (body.toLowerCase() == "mercury") {
      map = build_mercury();
    }
    else if (body.toLowerCase() == "mars") {
      layers = build_mars(data);
    }
    else if (body.toLowerCase() == "moon") {
      map = build_moon();
    }

    this._map = assembleMap(layers);
  }

  setVisible(layerID, state) {
    console.log(layerID, state);
    var map = this._map;
    if (map) {
      map.getLayers().forEach((layer,i) => {
        console.log(layer);
        if (layer.name == layerID) {
          layer.setVisible(state);
        }
      });
    }
  }
}

function assembleMap(layers) {
  var mousePositionControl = setMouseControls();

  var map = new ol.Map({
    target: document.getElementById('map-container'),
    view: new ol.View({
      projection: 'EPSG:4326',
      center: [0, 0],
      zoom: 2
    }),
    controls: ol.control.defaults().extend([mousePositionControl]),
    layers: layers,
  });

  var graticule = setGraticule();
  graticule.setMap(map);

  return map;
}

function setMouseControls() {
  var mousePositionControl = new ol.control.MousePosition({
    className: 'custom-mouse-position',
    target: document.getElementById('location'),
    coordinateFormat: ol.coordinate.createStringXY(5),
    undefinedHTML: '&nbsp;'
  });
  return mousePositionControl;
}

function setGraticule() {
  var lonLabelStyle = new ol.style.Text({
    font: '12px Calibri,sans-serif',
    textBaseline: 'bottom',
    fill: new ol.style.Fill({
      color: 'rgba(0,0,0,1)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(255,255,255,1)',
      width: 3
    })
  });

  var latLabelStyle = new ol.style.Text({
    font: '12px Calibri,sans-serif',
    textAlign: 'end',
    fill: new ol.style.Fill({
      color: 'rgba(0,0,0,1)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(255,255,255,1)',
      width: 3
    })
  });

  // Create the graticule component
  var graticule = new ol.Graticule({
    // the style to use for the lines, optional.
    strokeStyle: new ol.style.Stroke({
      color: 'rgba(255,120,0,0.9)',
      width: 1,
      lineDash: [0.5, 4]
    }),
    latLabelFormatter: function(lat){ return lat; },
    latLabelStyle: latLabelStyle,
    lonLabelFormatter: function(lon){ return lon; },
    lonLabelStyle: lonLabelStyle,
    showLabels: true
  });

  return graticule;
}

var Map = new OLMap();

export { Map };
