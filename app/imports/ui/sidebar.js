import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { bodies } from '/imports/data/bodies.js';

import { Map } from '/imports/api/map.js';

import './sidebar.html';

Template.bodiesSelector.events({
  'click .dropdown-item' (event, instance) {
    console.log(event.target.id);
    Session.set('currentBody', event.target.id);
    instance.find('#dropdownMenuButton').innerHTML = event.target.innerHTML;
  }
})

Template.sidebar.helpers({
  currentBody: function() {
    return Session.get('currentBody');
  }
})

Template.mapMenu.helpers({
  currentData: function() {
    var currentBody = Session.get('currentBody');
    for (body of bodies) {
      if (body.name == currentBody) {
        console.log(body.data);
        return body.data;
      }
    }
  }
})
// Template.sidebar.helpers({
//   localMap: [
//     {
//       name: "Hokusai",
//       basemap: null,
//       layers: {
//         multiple: [
//           {
//             layerID: "hokusai-3cc-lines",
//             layerLabel: "Linear features"
//           },
//           {
//             layerID: "hokusai-3cc-cont",
//             layerLabel: "Contacts"
//           },
//           {
//             layerID: "hokusai-3cc-surf",
//             layerLabel: "Surfaces"
//           },
//         ],
//         exclusive: [
//           {
//             layerGroup: "geological-units",
//             selected: true,
//             layerID: "hokusai-3cc-cat",
//             layerLabel: "3 Categories",
//             packageID: "PM-MER-MS-H05_3cc_01"
//           },
//           {
//             layerGroup: "geological-units",
//             layerID: "hokusai-5cc-cat",
//             layerLabel: "5 Categories",
//             packageID: "PM-MER-MS-H05_5cc_01"
//           },
//         ]
//       }
//     }
//   ]
// })


Template.sidebar.events({
  'click #PM-MER-MS-H05_3cc_01' (event, instance) {
    // function reqListener () {
    //   console.log(this.responseText);
    // }
    //
    // var oReq = new XMLHttpRequest();
    // oReq.addEventListener("load", reqListener);
    // oReq.open("GET", "https://data.planmap.eu/pub/mercury/PM-MER-MS-H05_3cc_01/document/PM-MER-MS-H05_3cc_01.pdf");
    // oReq.send();
    window.open("https://data.planmap.eu/pub/mercury/PM-MER-MS-H05_3cc_01", '_blank');
  },
  'click #PM-MER-MS-H05_5cc_01' (event, instance) {
    window.open("https://data.planmap.eu/pub/mercury/PM-MER-MS-H05_5cc_01", '_blank');
  },
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
