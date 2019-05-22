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
    var map;
    if (body.toLowerCase() == "mercury") {
      map = build_mercury()
    }
    else if (body.toLowerCase() == "mars") {
      map = build_mars()
    }
    else if (body.toLowerCase() == "moon") {
      map = build_moon()
    }

    this._map = map
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

var Map = new OLMap();

export { Map };
