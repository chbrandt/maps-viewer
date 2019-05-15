import { Map } from '/imports/api/map.js';

import './map.html';

Template.mapContainer.onRendered(() => {
  Map.build_mercury();
  // var map = Map.build_bla();
  // Session.set('map', map);
})
