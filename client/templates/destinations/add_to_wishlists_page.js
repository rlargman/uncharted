Template.addToWishlistsPage.helpers ({
	
	wishlists: function() {
		return Wishlists.find();
	}
});

Template.addToWishlistsPage.rendered = function() {
  var $menu_button = $('.static-menu');
  console.log($menu_button);
  $menu_button.addClass('invisible');
}