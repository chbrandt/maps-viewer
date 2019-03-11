import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '/imports/ui/App'

Meteor.startup(() => {
  var bodies = ["mars","moon"];
  
  render(<App bodies={bodies}/>, document.getElementById('app'));
});
