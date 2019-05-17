import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './menubar.html';

Template.menubar.helpers({
  currentBody: function() {
    return Session.get('currentBody');
  }
})
