// Constants
var PREVIOUS = -1;
var NEXT = 1;

function goToDestination(event, direction) {
  var destinations = Session.get('destinations');
  var currIndex = Session.get('currFilterIndex');

  var total = destinations.length;
  if (direction === NEXT) {
    if (currIndex + 1 >= total) {
      currIndex = 0;
    } else {
      currIndex = currIndex + 1;
    }
  } else {
    if (currIndex <= 0) {
      currIndex = total - 1;
    } else {
      currIndex = currIndex - 1; 
    }
  }

  Session.set('currFilterIndex', currIndex);
  var nextDestination = destinations[currIndex];
  Router.go('filters/' + nextDestination.continent + '/' + nextDestination._id);  
}

Template.filteredDestinationPage.rendered = function() {
  $('.destination-main-page').on("swipeleft", function(event) {
    goToDestination(event, PREVIOUS);
  });
  $('.destination-main-page').on("swiperight", function(event) {
    goToDestination(event, NEXT);
  }); 
}

Template.filteredDestinationPage.events({
  /** 
   * Takes the user to the trip details page when the main page is clicked on.
   *
   * Arguments:
   * ----------
   * @param e - the event that triggered the handler
   * @param template - the current template
   */
  'click .destination-main-name': function(e, template) {
    e.preventDefault();
    
    var destination = template.data;
    Router.go('/destinations/details/' + destination._id);
  },
});