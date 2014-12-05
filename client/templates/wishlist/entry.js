Template.individualListPage.helpers({

	wishlistentry:function (){
		return Destinations.find();
	}




});

Template.individualListPage.rendered=function(){
	$(".menu-icon").css("display","none");
	$(".static-menu").css("display","none");


}



