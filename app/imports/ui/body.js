import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Map } from '/imports/api/map.js';

import './body.html';

Template.body.helpers({
  bodies: [
    { bodyName: "Mercury" }
  ]
})

Template.sidebar.events({
  'change #hokusai-3cc' (event, instance) {
    console.log(event);
    var map = Map.getMap();
    map.getLayers().forEach((layer,i) => {
    console.log(layer.name +':'+ event.target.id);
      if (layer instanceof(ol.layer.Group)) {
        layer.setVisible(event.target.checked);
      }
    });
  },
  'change #hokusai-3cc-cat' (event, instance) {
    console.log(event);
    var map = Map.getMap();
    map.getLayers().forEach((layer,i) => {
    console.log(layer.name +':'+ event.target.id);
      if (layer.name == event.target.id) {
        layer.setVisible(event.target.checked);
      }
    });
  },
  'change #hokusai-3cc-surf' (event, instance) {
    console.log(event);
    var map = Map.getMap();
    map.getLayers().forEach((layer,i) => {
    console.log(layer.name +':'+ event.target.id);
      if (layer.name == event.target.id) {
        layer.setVisible(event.target.checked);
      }
    });
  },
  'change #hokusai-3cc-cont' (event, instance) {
    console.log(event);
    var map = Map.getMap();
    map.getLayers().forEach((layer,i) => {
      console.log(layer.name +':'+ event.target.id);
      if (layer.name == event.target.id) {
        layer.setVisible(event.target.checked);
      }
    });
  },
  'change #hokusai-3cc-lines' (event, instance) {
    console.log(event);
    var map = Map.getMap();
    console.log(map);
    map.getLayers().forEach((layer,i) => {
    console.log(layer.name +':'+ event.target.id);
      if (layer.name == event.target.id) {
        layer.setVisible(event.target.checked);
      }
    });
  }
})
// Template.bodyMenuBtn.events({
//   'click' (event) {
//     event.preventDefault();
//     console.log(event);
//   }
// })
//
// Template.bodySearchBox.events({
//   'keyup input' (event) {
//     event.preventDefault();
//     console.log(event);
//   },
//
//   'click button' (event) {
//     event.preventDefault();
//     console.log(event);
//   }
// })

Template.mapContainer.onRendered(() => {
  Map.build_mercury();
  // var map = Map.build_bla();
  // Session.set('map', map);
})
