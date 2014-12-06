// Constants
var PREVIOUS = -1;
var NEXT = 1;

Tracker.autorun(function () {
  var destination = Session.get('destination');
  if (Session.get('swiping')) {
    setTimeout(function() { Session.set('swiping', false); }, 1000); 
  }
});

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
  Session.set('swiping', true);
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
    var destinations = Session.get('destinations');
    var currIndex = Session.get('currFilterIndex');
    var currDestinationId = destinations[currIndex]._id;

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

Template.filteredDestinationPage.rendered = function() {
  $(".menu-icon").css("display","inline");
  $(".static-menu").css("display","inline");
  Session.set('swiping', false);
  var $destinationMainPage =  $('.destination-main-page');

  $('.destination-main-page').on("swipeleft", function(event) {
    event.preventDefault();
    event.stopPropagation();
    goToDestination(event, PREVIOUS);
  });

  $('.destination-main-page').on("swiperight", function(event) {
    event.preventDefault();
    event.stopPropagation();
    goToDestination(event, NEXT);
  }); 

  // SHORT TAP
  // used for the short tap to add to the default wishlist
  $(".destination-main-page").on("tap", function(event) {
    event.preventDefault();
    var target = event.target;

    if (target.id === 'heart') {
      var destinations = Session.get('destinations');
      var currIndex = Session.get('currFilterIndex');
      shortTap(event);
    } else if (!Session.get('swiping')) {
      var destinations = Session.get('destinations');
      var currIndex = Session.get('currFilterIndex');
      Session.set('destination', destinations[currIndex]);
      Router.go('/destinations/details/' + destinations[currIndex]._id);
    }
  });

  // LONG TAP
  //used for the long tap to add to the custom wishlist
  $(".destination-main-page").on("taphold", function(event) {
    event.preventDefault();
    var target = event.target;
    event.stopPropagation();
    if (target.id == 'heart') {
      Session.set('currId', Session.get('destination')._id);

    // $(".heart-unfilled").off("tap"); //the tap functionality was being called after taphold was called
      longTap(event);
      //turnOn(); //turns back on
    } 
  
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
