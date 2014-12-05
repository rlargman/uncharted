Template.addToWishlistsPage.helpers ({
	
	wishlists: function() {
		return Wishlists.find();
	}
});

Template.addToWishlistsPage.rendered = function() {
  var $menu_button = $('.static-menu');
  $menu_button.addClass('invisible');
}