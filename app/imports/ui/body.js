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
  'click #hokusai-5cc-cat, click #hokusai-3cc-cat' (event, instance) {
    console.log(event);
    var map = Map.getMap();
    map.getLayers().forEach((layer,i) => {
      console.log(layer.name +':'+ event.target.id);
      if (layer.name == 'hokusai-5cc-cat') {
        console.log($('#hokusai-5cc-cat').is(':checked'));
        layer.setVisible($('#hokusai-5cc-cat').is(':checked'));
      }
      if (layer.name == 'hokusai-3cc-cat') {
        console.log($('#hokusai-3cc-cat').is(':checked'));
        layer.setVisible($('#hokusai-3cc-cat').is(':checked'));
      }
    });
  },
  // 'change #hokusai-5cc-cat' (event, instance) {
  //   console.log(event);
  //   var map = Map.getMap();
  //   map.getLayers().forEach((layer,i) => {
  //   console.log(layer.name +':'+ event.target.id);
  //     if (layer.name == event.target.id) {
  //       layer.setVisible(event.target.checked);
  //     }
  //   });
  // },
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

Template.mapContainer.onRendered(() => {
  Map.build_mercury();
  // var map = Map.build_bla();
  // Session.set('map', map);
})
