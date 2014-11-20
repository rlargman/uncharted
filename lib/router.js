Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  template: 'destinationPage',
  data: function() {
    var destination = Destinations.findOne();
    if (Meteor.isClient) {
      Session.set('currId', destination._id);
    }
    return destination;
  }
});

Router.route('/destinations/details/:_id', {
  name: 'tripDetailsPage',
  data: function() { 
    if (Meteor.isClient) {
      Session.set('currId', this.params._id);
    }  
    return Destinations.findOne(this.params._id); 
  }
});

Router.route('/destinations/:_id', {
  name: 'destinationPage',
  data: function() {
    if (Meteor.isClient) {
      Session.set('currId', this.params._id);
    }    
    return Destinations.findOne(this.params._id);
  }
});

Router.route('/destinations', {
  name: 'destinations',
  template: 'destinationPage',
  data: function() {
    var destination = Destinations.findOne();
    if (Meteor.isClient) {
      Session.set('currId', destination._id);
    }
    return destination;
  }
});