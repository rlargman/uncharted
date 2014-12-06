Template.addToWishlistsPage.helpers ({
	
	wishlists: function() {
		return Wishlists.find();
	}
});


Template.addToWishlistsPage.rendered=function(){
	$(".menu-icon").css("display","none");
	$(".static-menu").css("display","none");
}