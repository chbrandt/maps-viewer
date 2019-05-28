import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { bodies } from '/imports/data/bodies.js';
import { Map } from '/imports/api/map.js';
import './sidebar.html';


var dataserver_url = Meteor.settings.public.dataserver.url;
console.log('DataServer-URL: ' + JSON.stringify(dataserver_url));
var notebooks_url = Meteor.settings.public.notebooks.url;
console.log('Notebooks-URL: ' + JSON.stringify(notebooks_url));


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
    var url = notebooks_url;
    window.open(url, '_blank');
  }
})


Template.readInfo.events({
  'click' (event, instance) {
    console.log(event);
    console.log(instance);
  }
})
