Template.tripDetailsPage.events({

  'click .trip-details-page': function(e, template) {
    e.preventDefault();
    
    var destination = template.data;
    Router.go('/destinations/' + destination._id);
  }
});


Template.tripDetailsPage.rendered = function() {


	var currDestination = Session.get("destination");



	
	var $elem = $(".trip-details-page");

	if (!$elem.attr('id')){

		$elem.attr('id', 'page-' + currDestination.index);
	}
	$elem.data('pseudoIndex', currDestination.index);



	var $trip = $(".trip-details-page");

	var id =  $trip.attr('id');
	var rule ;
	selector = '#' + id + '::before';
	index = $trip.data('pseudoIndex');

	rule = selector + ' { \
		background-image: url("' + currDestination.imageSrc + '");\
		position: absolute;\
		content: "";\
		top: 0;\
		bottom: 0;\
		right: 0;\
		left: 0;\
		z-index: -1;\
		background-size: 100%;\
	}';


    $('head').append(document.createElement('style'));
    myStyleSheet = document.styleSheets[0];

    myStyleSheet.insertRule(rule, 10);	

  // used for the short tap to add to the default wishlist
  $("#heart").on("tap", function(event) {
    shortTap(event);
  });
}

/*
 * Functionality to do stuff for the ShortPress functionality for the Wishlist
 */
var shortTap = function(event) {
  event.preventDefault();
  console.log("short tap");  

  var heart = $('#heart');

  if (heart.hasClass('trip-details-heart-unfilled')) {
    var currDestinationId = Session.get('currId');

    Wishlists.update( {_id: Wishlists.findOne({default_list: true})['_id'] }, {                     // adds the current destination to the default wishlist's destinations
      $addToSet: { destinations: currDestinationId }
    });
    
    Destinations.update( { _id: currDestinationId }, {                                              // updates property to show that destination is added to a wishlist
      $set: { addedToWishlist: true }
    });

    $('#heart-div').html('<img id="heart" class="trip-details-heart-filled" src="/heart.png" />');  // makes heart filled
  }
}