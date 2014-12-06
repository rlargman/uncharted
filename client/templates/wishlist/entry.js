Template.individualListPage.helpers({

	wishlistentry:function (){
		var id = Session.get("currId")
		console.log(id)
		var list =Wishlists.findOne(id);
		var wishlistentry = [];
		list.destinations.forEach(function (dest){
			console.log("destination tag: "+dest);
			var individual = Destinations.findOne(dest);
			wishlistentry.push(individual);
		});
		return wishlistentry;
	}




});

Template.individualListPage.rendered=function(){
	$(".menu-icon").css("display","none");
	$(".static-menu").css("display","none");
}


Template.individualListPage.events ({
  'click .list-back-button' : function(e, template) {
    Router.go('/wishlists');
  }
});



