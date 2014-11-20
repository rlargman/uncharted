Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  template: 'destinationPage',
  data: function() {
    return Destinations.findOne();
  }
});

Router.route('/destinations/details/:_id', {
  name: 'tripDetailsPage',
  data: function() { 
    return Destinations.findOne(this.params._id); 
  }
});

Router.route('/destinations/:_id', {
  name: 'destinationPage',
  data: function() {
    return Destinations.findOne(this.params._id);
  }
});

Router.route('/destinations', {
  name: 'destinations',
  template: 'destinationPage',
  data: function() {
    return Destinations.findOne();
  }
});