Template.addToWishlistsEntry.helpers = {
 checkForBackgroundImage: function() {
	var currWishlistDestinations = this.destinations;

	console.log(this);

	if (currWishlistDestinations.length === 0) {
		// remove img element
		$('.first-destination-image').remove();                     

		// add translucent background css class to entry div
		$('.add-to-wishlists-entry').addClass('no-img-background');
	}
}
	
}

Template.addToWishlistsPage.rendered = function() {

	
}


// use this to add event handlers for the wish list buttons
// Template.addToWishlistsPage.events = {
// 	function(template, e) {
// 		template.data 
// 	}
// }