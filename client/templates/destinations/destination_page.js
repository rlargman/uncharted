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

  var currDestination = Session.get('destination');
  
  var otherDestination = retrieveDestination(currDestination.index, direction);
  
  if(!otherDestination) {
    otherDestination = Destinations.findOne();
  }
  
  Session.set('destination', otherDestination);
  Router.go('/destinations/' + otherDestination._id);  
}


/*
*Functionality to do stuff for the ShortPress functionality for the Wishlist
*/
var shortTap = function(event) {

  console.log("short tap");  

}

/*
*Function to do stuff for the Long press functionality for the Wishlist
*/

var longTap = function(event) {
  $('.destination-main-page').fadeTo(100,.5);
  console.log("long tap");
}


/*
* Will turn on the event listener for the short tap
* Needed because event listener had to be turned off for long press
*/
var turnOn = function() {
  $(".heart-unfilled").on("tap", function(event){
    console.log("short press re-enabled")
    shortTap(event);
  });
}

/*
 * Adds the tap event listener to the page and redirects to trip details
 */
function addTripDetailsEventListener() {
  var $destinationMainPage =  $('.destination-main-page');  
  $destinationMainPage.on("tap", function(event) {
    event.preventDefault();
    
    var destination = Session.get('destination');
    Router.go('/destinations/details/' + destination._id);
  });
}

Template.destinationPage.rendered = function() {
  var $destinationMainPage =  $('.destination-main-page');

  $destinationMainPage.on("swipeleft", function(event) {
    $destinationMainPage.off("tap"); 
    goToDestination(event, PREVIOUS);
    addTripDetailsEventListener();
  });
  $destinationMainPage.on("swiperight", function(event) {
    $destinationMainPage.off("tap");     
    goToDestination(event, NEXT);
    addTripDetailsEventListener();
  }); 

  addTripDetailsEventListener();
  
  // used for the short tap to add to the default wishlist
  $(".heart-unfilled").on("tap", function(event) {
    $destinationMainPage.off("tap"); 
    shortTap(event);
    var currDestinationId = Session.get('currId');
    
    // adds the current destination to the default wish list's destinations
    Wishlists.update( {_id: Wishlists.findOne({default_list: true})['_id'] }, {
      $addToSet: { destinations: currDestinationId }
    });

    addTripDetailsEventListener(); //turns on tap for trip details
  });

  //used for the long tap to add to the custom wishlist
  $(".heart-unfilled").on("taphold", function(event){
    $destinationMainPage.off("tap"); 
    $(".heart-unfilled").off("tap"); //the tap functionality was being called after taphold was called
    longTap(event);
    turnOn(); //turns back on 
    addTripDetailsEventListener(); //turns on tap for trip details
  });

}

function toggleMenu() {
  var $menu = $('.menu-wrapper');
  $menu.toggleClass('invisible');
}

Template.destinationPage.events({

  'tap .heart-unfilled' : function(e, template){
    console.log("short tap");
  },

  'click .menu-icon': function(e, template) {
    e.preventDefault();

    var $destinationMainPage =  $('.destination-main-page');
    $destinationMainPage.off("tap");
    toggleMenu();
    addTripDetailsEventListener();
  }

});

