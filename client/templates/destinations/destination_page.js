Template.destinationPage.events({
  'click .destination-main-page': function(e, template) {
    e.preventDefault();
    
    var destination = template.data;
    Router.go(
      '/destinations/details/' + destination._id, 
      {destination: destination}
    );
  }
});