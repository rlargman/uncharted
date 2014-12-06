// Constants
var PREVIOUS = -1;
var NEXT = 1;

Tracker.autorun(function () {
  var destination = Session.get('destination');
  if (Session.get('swiping')) {
    setTimeout(function() { Session.set('swiping', false); }, 1000); 
  }
});

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
  var count = Destinations.find().count()-1;
  var next;
  if (currIndex==count && sort==1){
    next=0;
  } else if (currIndex==0 && sort==-1){
    next=count
  } else {
    next = currIndex+sort;
  }
  return Destinations.find({index: next}).fetch()[0];
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
  
  Session.set('swiping', true);
  Session.set('destination', otherDestination);
  Router.go('/destinations/' + otherDestination._id);  
}


/*
 * Functionality to do stuff for the ShortPress functionality for the Wishlist
 */
var shortTap = function(event) {
  event.preventDefault();
  console.log("short tap");  

  var heart = $('#heart');

  if (heart.hasClass('heart-unfilled')) {
    Session.set('currId', Session.get('destination')._id);   
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

Template.destinationPage.rendered = function() {
  $(".menu-icon").css("display","inline");
  $(".static-menu").css("display","inline");
  Session.set('swiping', false);
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
      console.log(Session.get('destination'));
      Session.set('currId', Session.get('destination')._id);   
      shortTap(event);
    } else if (!Session.get('swiping')) {
      var destination = Session.get('destination');
      Router.go('/destinations/details/' + destination._id);
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
}

Template.destinationPage.events ({

});



