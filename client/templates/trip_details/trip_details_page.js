Template.tripDetailsPage.events({

  'click .trip-details-page': function(e, template) {
    e.preventDefault();
    
    var destination = template.data;
    Router.go('/destinations/' + destination._id);
  }
});

Template.tripDetailsPage.rendered=function(){


	var currDestination = Session.get("destination");



	
	var $elem = $(".trip-details-page");

	if (!$elem.attr('id')){

		$elem.attr('id', 'page-' + currDestination.index);
	}
	$elem.data('pseudoIndex', currDestination.index);



	var $trip = $(".trip-details-page");

	var id =  $trip.attr('id');
	var rule ;
	selector = '#' + id + '::before';
	index = $trip.data('pseudoIndex');

	rule = selector + ' { \
		background-image: url("' + currDestination.imageSrc + '");\
		position: absolute;\
		content: "";\
		top: 0;\
		bottom: 0;\
		right: 0;\
		left: 0;\
		z-index: -1;\
		background-size: 100%;\
	}';


    $('head').append(document.createElement('style'));
    myStyleSheet = document.styleSheets[0];

    myStyleSheet.insertRule(rule, 10);	


}