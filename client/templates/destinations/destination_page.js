Template.destinationPage.helpers({
  name: function() {
    return Destinations.find().fetch()[0].name;
  }
});