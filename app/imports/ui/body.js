import { Template } from 'meteor/templating';

import './body.html';

import './sidebar.js';
import './menubar.js';
import './map.js';

// Template.body.helpers({
//   bodies: [
//     { bodyName: "Mercury" }
//   ]
// })

import { bodies } from '/imports/data/bodies.js';

Template.body.helpers({
  bodies: bodies
})
