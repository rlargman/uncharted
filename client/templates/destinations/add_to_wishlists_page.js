Template.addToWishlistsPage.helpers ({
	
	wishlists: function() {
		return Wishlists.find();
	}
});


Template.addToWishlistsPage.rendered = function() {
	$(".menu-icon").css("display","none");
	$(".static-menu").css("display","none");
}

Template.addToWishlistsPage.events({
  
  /** 
   * 
   */
  'click .add-to-wishlists-cancel-icon': function(e, template) {
  	console.log(Session.get('currId'));
    e.preventDefault();
    Router.go('/destinations/' + Session.get('currId'));
  }
});
