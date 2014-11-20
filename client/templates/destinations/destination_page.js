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
var retrieveDestination = function(currId, sort) {
return Destinations.find({_id: {$gt: currId}}, { 
      sort: {_id: sort },
      limit: 1
  }).fetch()[0];
}

Template.destinationPage.rendered = function() {
  $('.destination-main-page').on( "swipe", function(event) { 
    e.preventDefault();

    var currId = template.data._id;
    var prevDestination = retrieveDestination(currId, -1);
    
    if(!prevDestination) {
      prevDestination = Destinations.findOne();
    }
    
    Router.go('/destinations/' + prevDestination._id);  
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
  'swipe .destination-main-page': function(e, template) {
    e.preventDefault();

    var currId = template.data._id;
    var prevDestination = retrieveDestination(currId, -1);
    
    if(!prevDestination) {
      prevDestination = Destinations.findOne();
    }
    
    Router.go('/destinations/' + prevDestination._id);  
  }
});

