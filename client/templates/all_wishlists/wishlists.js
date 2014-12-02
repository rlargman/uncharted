Template.wishlists.helpers({ 

	destinations: function() {
		return Destinations.find().limit(3);
	}
	
});