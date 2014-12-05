Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home',
  template: 'destinationPage',
  data: function() {
    var destination = Destinations.find({name: "Kauai, Hawaii"}).fetch();

    if (Meteor.isClient) {
      Session.set('destination', destination[0]);
    }
    return destination[0];
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

Router.route('filters/destinations/:_id', {
  name: 'filteredDestinationPage',
  data: function() {
    return Destinations.findOne(this.params._id); 
  }
});

Router.route('filters/:continent', {
  template: 'filteredDestinationPage',
  data: function() {
    var destinations = Destinations.find({
      continent: this.params.continent
    }).fetch();
    if (Meteor.isClient) {
      Session.set('destinations', destinations);
      Session.set('currFilterIndex', 0);
    }
    return destinations[0];
  }
});

Router.route('/destinations/:_id', {
  name: 'destinationPage',
  data: function() {
    var destination = Destinations.findOne(this.params._id);
    if (Meteor.isClient) {
      Session.set('currId', this.params._id);
      Session.set('destination', destination);
    }    
    return destination
  }
});

Router.route('/filters', {
  template: 'filtersPage'
});

Router.route('/destinations', {
  name: 'destinations',
  template: 'destinationPage',
  data: function() {
    var destination = Destinations.find({name: "Kauai, Hawaii"}).fetch();

    if (Meteor.isClient) {
      Session.set('destination', destination[0]);
      Session.set('currId', destination[0]._id);
    }
    return destination[0];
  }
});

Router.route('/add_to_wishlists', {
  name: 'addToWishlists',
  template: 'addToWishlistsPage'
})

Router.route('/wishlists', {
  name: 'wishlists',
  template: 'wishlistsPage'
});

Router.route('/wishlists/:_id', {
  template: 'individualListPage',
  data: function() { 
    if (Meteor.isClient) {
      Session.set('currId', this.params._id);
    }  
    return Wishlists.findOne(this.params._id); 
  }
});
