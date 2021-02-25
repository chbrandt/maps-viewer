import { Map } from '/imports/api/map.js';

import './map.html';

Template.mapContainer.onCreated(() => {
  console.log("mapContainer created");
})

Template.mapContainer.onRendered(() => {
  console.log("mapContainer rendered");
})

Template.mapContainer.onDestroyed(() => {
  console.log("mapContainer destroyed");
})

Template.mapContainer.helpers({
  body: function() {
    var body = Session.get('currentBody');
    console.log(Template.instance().view.name +", body:"+ body);
    if (body) {
      Map.build(body);
    }
    return body;
  }
})
