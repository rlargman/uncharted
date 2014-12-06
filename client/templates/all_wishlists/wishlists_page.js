	var createObject=function(link, image, name){
		return {id:link, image: image, name: name};
	}

Template.wishlistsPage.helpers({ 


	destinations: function() {
		var destinations=[];
		console.log("count: "+Wishlists.find().count());
		wishlists = Wishlists.find();
		wishlists.forEach(function (dest){
			var listName = dest.name;
			var listLink = dest._id;
			console.log("in foreach")
			var individual = dest.destinations;
			var image =null;
			if (individual.length!=0) {
				var first = Destinations.findOne(individual[0]);
				console.log("first object: "+first);
				image = first.listImageSrc

			}
			var obj = createObject(listLink, image, listName);
			console.log("obj: "+obj.image);
			destinations.push(obj);
		});
		console.log(destinations);
		return destinations;
	}
	
});

Template.wishlistsPage.rendered=function(){
	$(".menu-icon").css("display","inline");
	$(".static-menu").css("display","inline");
}

