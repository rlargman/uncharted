Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  template: 'destinationsList'
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
  name: 'destinationsList'
});