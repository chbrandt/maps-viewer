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
    this._data = null;
  }

  getMap() {
    return this._map;
  }

  clean() {
    this._map.setTarget(null);
    this._map = null;
    this._data = null;
  }

  build(body) {
    console.log("Building map of " + body)
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
    this._data = data;
    console.log("Data set found: " + JSON.stringify(data));
    if (body.toLowerCase() == "mercury") {
      layers = build_mercury(data);
    }
    else if (body.toLowerCase() == "mars") {
      layers = build_mars(data);
    }
    else if (body.toLowerCase() == "moon") {
      layers = build_moon(data);
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
          if (layer.role == 'main') {
            layer.setVisible(state);
          }
          if (layer.role == 'marker') {
            layer.setVisible(!state);
          }
          setLegend(layerID, state, layer.values_.source.params_)
        }
      });
    }
  }

  goto(layerID) {
    console.log(layerID);
    var map = this._map;
    if (map) {
      this._data.maps.forEach((layer,i) => {
        console.log(layer);
        if (layer.pm_id == layerID) {
          console.log(layer);
          var view = map.getView();
          var xmin = layer.bbox.xmin;
          var ymin = layer.bbox.ymin;
          var xmax = layer.bbox.xmax;
          var ymax = layer.bbox.ymax;
          var extent = [xmin,ymin,xmax,ymax];
          var center = [(xmax+xmin)/2,(ymax+ymin)/2]
          // view.fit(extent);
          var resolution = view.getResolutionForExtent(extent);
          // var location = [layer.center.lon, layer.center.lat];
          map.getView().animate({
            center: center,
            resolution: resolution,
            duration: 1000
          });
        }
      });
    }
  }
}

function setLegend(layerID, turnON, params_) {
  return;
  if (params_) {
    var legend_url = '/wms?REQUEST=GetLegendGraphic&service=WMS&version=1.1.1' +
                      '&FORMAT=image/png&WIDTH=20&HEIGHT=20' +
                      '&LAYER=' + params_.LAYERS;
    document.getElementById('legend').src = geoserver_url + legend_url;
  } else {
    document.getElementById('legend').src = null;
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

  setPopup(map);

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

function setPopup(map) {
  var element = document.getElementById('popup');
  console.log('setup popup');
  console.log(element);

  var popup = new ol.Overlay({
    element: element,
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -50]
  });
  map.addOverlay(popup);

  // display popup on click
  map.on('click', function(evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel,
      function(feature) {
        return feature;
      });
      console.log(feature);
    if (feature) {
      var coordinates = feature.getGeometry().getCoordinates();
      popup.setPosition(coordinates);
      $(element).popover({
        placement: 'top',
        html: true,
        content: feature.get('name')
      });
      $(element).popover('show');
      console.log('show');
    } else {
      $(element).popover('destroy');
      console.log('destroy');
    }
    console.log(element);
  });
}

var Map = new OLMap();

export { Map };
