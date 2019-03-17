import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '/imports/ui/App';
import { Maps } from '/imports/api/basemaps.js';

Meteor.startup(() => {
  var bodies = Maps.bodies();
  console.log("Bodies we have: " + JSON.stringify(bodies));

  render(<App bodies={bodies}/>, document.getElementById('app'));
});
