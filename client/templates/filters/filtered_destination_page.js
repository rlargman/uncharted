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
  Router.go('filteredDestinationPage', {_id: nextDestination._id});  
}

/*
 * Functionality to do stuff for the ShortPress functionality for the Wishlist
 */
var shortTap = function(event) {
  event.preventDefault();
  console.log("short tap");  

  var heart = $('#heart');

  if (heart.hasClass('heart-unfilled')) {
    var currDestinationId = Session.get('currId');

    Wishlists.update( {_id: Wishlists.findOne({default_list: true})['_id'] }, {        // adds the current destination to the default wishlist's destinations
      $addToSet: { destinations: currDestinationId }
    });
    
    Destinations.update( { _id: currDestinationId }, {                                 // updates property to show that destination is added to a wishlist
      $set: { addedToWishlist: true }
    });
  }
}


/*
 * Function to do stuff for the Long press functionality for the Wishlist
 */

var longTap = function(event) {
  console.log("long tap");
  $('.destination-main-page').fadeTo(100,.5);
  Router.go('/add_to_wishlists');
}


/*
* Will turn on the event listener for the short tap
* Needed because event listener had to be turned off for long press
*/
var turnOn = function() {
  $(".heart-unfilled").on("tap", function(event) {
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
    
    var destinations = Session.get('destinations');
    var currIndex = Session.get('currFilterIndex');
    Session.set('destination', destinations[currIndex]);
    Router.go('/destinations/details/' + destinations[currIndex]._id);
  });
}

Template.filteredDestinationPage.rendered = function() {
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
  $("#heart").on("tap", function(event) {
    shortTap(event);
  });

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
  $(".heart-unfilled").on("taphold", function(event) {
    $destinationMainPage.off("tap"); 
    $(".heart-unfilled").off("tap"); //the tap functionality was being called after taphold was called
    longTap(event);
    turnOn(); //turns back on 
    addTripDetailsEventListener(); //turns on tap for trip details
  });
}

Template.filteredDestinationPage.events ({
  'tap .heart-unfilled' : function(e, template) {
    console.log("short tap");
  }
});