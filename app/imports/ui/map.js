import { Map } from '/imports/api/map.js';

import './map.html';

Template.mapContainer.onCreated(() => {
  console.log("mapContainer created");
  // Map.build_mercury();
  // var map = Map.build_bla();
  // Session.set('map', map);
})

Template.mapContainer.onRendered(() => {
  console.log("mapContainer rendered");
  // Map.build_mercury();
  // Session.set('map', map);
})

Template.mapContainer.onDestroyed(() => {
  console.log("mapContainer destroyed");
  // Map.build_mercury();
  // var map = Map.build_bla();
  // Session.set('map', map);
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
