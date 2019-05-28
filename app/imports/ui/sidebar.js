import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { bodies } from '/imports/data/bodies.js';

import { Map } from '/imports/api/map.js';

import './sidebar.html';

var dataserver_url = Meteor.settings.public.dataserver.url;
console.log('DataServer-URL: ' + JSON.stringify(dataserver_url));

Template.bodySelector.events({
  'click .dropdown-item' (event, instance) {
    console.log(event.target.id);
    Session.set('currentBody', event.target.id);
    instance.find('#dropdownMenuButton').innerHTML = event.target.innerHTML;
  }
})

Template.bodySelector.onRendered(function() {
  // Triggers the first planet of the list
  $('.dropdown-item:first').click();
})

Template.sidebar.helpers({
  currentBody: function() {
    return Session.get('currentBody');
  }
})

Template.mapsMenu.helpers({
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

Template.toggleLayer.helpers({
  isChecked: function() {
    var _ = Session.get('currentBody');
    console.log('ischecked' + _);
    return false;
  }
})

Template.toggleLayer.events({
  'click input' (event, instance) {
    console.log(event);
    var layer = instance.data.pm_id;
    var state = event.target.checked;
    Map.setVisible(layer, state);
  }
})

Template.downloadPackage.events({
  'click button' (event, instance) {
    console.log(event);
    var body = Session.get('currentBody').toLowerCase();
    var pkgid = this.pm_id;
    var url = [dataserver_url, body, pkgid].join('/');
    window.open(url, '_blank');
  }
})

Template.gotoData.events({
  'click button' (event, instance) {
    console.log(event);
    var body = Session.get('currentBody').toLowerCase();
    var pkgid = this.pm_id;
    var url = [dataserver_url, body, pkgid].join('/');
    window.open(url, '_blank');
  }
})

Template.getNotebook.events({
  'click button' (event, instance) {
    console.log(event);
    var body = Session.get('currentBody').toLowerCase();
    var pkgid = this.pm_id;
    var url = [dataserver_url, body, pkgid].join('/');
    window.open(url, '_blank');
  }
})

Template.readInfo.events({
  'click' (event, instance) {
    console.log(event);
    console.log(instance);
  }
})

// Template.layerSelector.events({
//   'click input' (event, instance) {
//     console.log(event);
//     var layerID = event.target.id;
//     var state = event.target.checked;
//     Map.setVisible(layerID, state);
//     // var map = Map.getMap();
//     // map.getLayers().forEach((layer,i) => {
//     // console.log(layer.name +':'+ event.target.id);
//     //   if (layer.name == event.target.id) {
//     //     layer.setVisible(event.target.checked);
//     //   }
//     // });
//   },
// })

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

// Template.OLD_layerSwitcher.events({
//   'click #PM-MER-MS-H05_3cc_01' (event, instance) {
//     // function reqListener () {
//     //   console.log(this.responseText);
//     // }
//     //
//     // var oReq = new XMLHttpRequest();
//     // oReq.addEventListener("load", reqListener);
//     // oReq.open("GET", "https://data.planmap.eu/pub/mercury/PM-MER-MS-H05_3cc_01/document/PM-MER-MS-H05_3cc_01.pdf");
//     // oReq.send();
//     window.open("https://data.planmap.eu/pub/mercury/PM-MER-MS-H05_3cc_01", '_blank');
//   },
//   'click #PM-MER-MS-H05_5cc_01' (event, instance) {
//     window.open("https://data.planmap.eu/pub/mercury/PM-MER-MS-H05_5cc_01", '_blank');
//   },
//   'click #hokusai-5cc-cat, click #hokusai-3cc-cat' (event, instance) {
//     console.log(event);
//     var map = Map.getMap();
//     map.getLayers().forEach((layer,i) => {
//       console.log(layer.name +':'+ event.target.id);
//       if (layer.name == 'hokusai-5cc-cat') {
//         console.log($('#hokusai-5cc-cat').is(':checked'));
//         layer.setVisible($('#hokusai-5cc-cat').is(':checked'));
//       }
//       if (layer.name == 'hokusai-3cc-cat') {
//         console.log($('#hokusai-3cc-cat').is(':checked'));
//         layer.setVisible($('#hokusai-3cc-cat').is(':checked'));
//       }
//     });
//   }
// })

// Template.sidebar.events({
//   // 'change #hokusai-3cc' (event, instance) {
//   //   console.log(event);
//   //   var map = Map.getMap();
//   //   map.getLayers().forEach((layer,i) => {
//   //   console.log(layer.name +':'+ event.target.id);
//   //     if (layer instanceof(ol.layer.Group)) {
//   //       layer.setVisible(event.target.checked);
//   //     }
//   //   });
//   // },
// })

// Template.OLD_layerSelector.events({
//   'change #hokusai-3cc-surf' (event, instance) {
//     console.log(event);
//     var map = Map.getMap();
//     map.getLayers().forEach((layer,i) => {
//     console.log(layer.name +':'+ event.target.id);
//       if (layer.name == event.target.id) {
//         layer.setVisible(event.target.checked);
//       }
//     });
//   },
//   'change #hokusai-3cc-cont' (event, instance) {
//     console.log(event);
//     var map = Map.getMap();
//     map.getLayers().forEach((layer,i) => {
//       console.log(layer.name +':'+ event.target.id);
//       if (layer.name == event.target.id) {
//         layer.setVisible(event.target.checked);
//       }
//     });
//   },
//   'change #hokusai-3cc-lines' (event, instance) {
//     console.log(event);
//     var map = Map.getMap();
//     console.log(map);
//     map.getLayers().forEach((layer,i) => {
//     console.log(layer.name +':'+ event.target.id);
//       if (layer.name == event.target.id) {
//         layer.setVisible(event.target.checked);
//       }
//     });
//   }
// })
