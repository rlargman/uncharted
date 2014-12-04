Template.tripDetailsPage.events({
	
  'click .trip-details-page': function(e, template) {
    e.preventDefault();
    
    var destination = template.data;
    Router.go('/destinations/' + destination._id);
  }
});