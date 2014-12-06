Template.addToWishlistsEntry.helpers ({
  hasDestinations: function() {
    return this.destinations.length > 0;
  },

	firstDestinationImgSrc:  function() {
		currWishlistDestinations = this.destinations;
		firstDestinationId = currWishlistDestinations[0];
		firstDestination = Destinations.findOne(firstDestinationId);

		return firstDestination.listImageSrc;
	},
});

Template.addToWishlistsEntry.rendered = function() {

  var $menu_button = $('.static-menu');
  $menu_button.toggleClass('invisible');
}

Template.addToWishlistsEntry.events ({
  'click .add-to-wishlists-entry': function(e, template) {
    e.preventDefault();

    var currDestinationId = Session.get('currId');
    var currWishlist = this;
        
    // adds the current destination to the default wish list's destinations
    Wishlists.update( {_id: currWishlist._id }, {
      $addToSet: { destinations: currDestinationId }
    });
      
    Destinations.update( { _id: currDestinationId }, {                                 // updates property to show that destination is added to a wishlist
      $set: { addedToWishlist: true }
    });

    // route back to the current destination main page
    Router.go('/destinations/' + currDestinationId);
  }

});














// // use this to add event handlers for the wish list buttons
// Template.addToWishlistsPage.events ({
// 	'click .add-to-wishlists-entry': function(e, template) {
// 		e.preventDefault();

// 		var currWishlist = this;
// 		var currDestinationId = Session.get('currId');
// 		console.log(currWishlist);
// 		console.log(currWishlist._id);
// 		console.log(Wishlists.findOne({default_list: true})['_id']);

// 		// update the wishlist object's destination array with this id
// 		// adds the current destination to the default wish list's destinations
//     	Wishlists.update( {_id: currWishlist._id }, {
//       		$addToSet: { destinations: currDestinationId }
//     	});
//     	Wishlists.update( {_id: Wishlists.findOne({default_list: true})['_id'] }, {
//      		$addToSet: { destinations: currDestinationId }
//     	});


// 		// route back to the current destination main page

// 		// Router.go('/filters/North America');
// 	}
// });