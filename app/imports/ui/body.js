import { Template } from 'meteor/templating';

import './body.html';

import './sidebar.js';
import './menubar.js';
import './map.js';

import { bodies } from '/imports/data/bodies.js';

Template.body.helpers({
  bodies: bodies
})

Template.body.events({
  // 'click' (event, instance) {
  //   // console.log(event);
  // }
})

Template.body.onRendered(function() {
  // console.log('dropdown menu');
  // var b = $('.dropdown-menu').toggle().find('button')[0];
  // console.log($(b).click());
  // console.log($('button#Mercury').click());
})
