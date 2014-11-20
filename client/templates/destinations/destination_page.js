// Constants
var PREVIOUS = -1;
var NEXT = 1;

/** 
 * Retrieves a single destination from the database that is either the next or
 * the previous destination from the current one.
 *
 * Arguments:
 * ----------
 * @param currId - the current destination id
 * @param sort - ordering to determine if the next or previous destination
 *  should be retrieved. -1 for previous, 1 for next.
 *
 * @return - destination being retrieved
 */
var retrieveDestination = function(currIndex, sort) {
return Destinations.find({index: {$gt: currIndex, $lte: currIndex + 1}}, { 
      sort: {_id: sort},
  }).fetch()[0];
}

/** 
 * Takes the user to desired destination after a swipe left on the main page.
 *
 * Arguments:
 * ----------
 * @param event - the event that triggered the handler
 * @param direction - whether the next or previous destination should be shown
 */
var goToDestination = function(event, direction) {
  event.preventDefault();

  var currDestinationId = Session.get('currId');
  var currDestination = Destinations.findOne(currDestinationId);
  console.log(currDestination);
  var otherDestination = retrieveDestination(currDestination.index, direction);
  
  if(!otherDestination) {
    otherDestination = Destinations.findOne();
  }
  console.log(otherDestination);
  
  Router.go('/destinations/' + otherDestination._id);  
}

Template.destinationPage.rendered = function() {
  $('.destination-main-page').on("swipeleft", function(event) {
    goToDestination(event, PREVIOUS);
  });
  $('.destination-main-page').on("swiperight", function(event) {
    goToDestination(event, NEXT);
  }); 
}

Template.destinationPage.events({
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

  /** 
   * Takes the user to previous destination after a swipe left on the main 
   * page/
   *
   * Arguments:
   * ----------
   * @param e - the event that triggered the handler
   * @param template - the current template
   */
  'swipeleft .destination-main-page': function(e, template) {
    e.preventDefault();

    var currId = template.data._id;
    var prevDestination = retrieveDestination(currId, -1);
    
    if(!prevDestination) {
      prevDestination = Destinations.findOne();
    }
    
    Router.go('/destinations/' + prevDestination._id);  
  }
});

