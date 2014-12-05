Template.menu.events({

  'click #explore-destinations': function(e, template) {
    e.preventDefault();

    var $destinationMainPage =  $('.destination-main-page');
    $destinationMainPage.off("tap");
    Router.go('/destinations');
  },

  'click #filter-destinations': function(e, template) {
    e.preventDefault();

    var $destinationMainPage =  $('.destination-main-page');
    $destinationMainPage.off("tap");
    Router.go('/filters');
  }
});