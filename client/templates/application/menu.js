function toggleMenu() {
  var $menu = $('.menu-wrapper');
  $menu.toggleClass('invisible');
}

Template.menu.events({
  'click .menu-icon': function(e, template) {
    var $menu = $('.menu-wrapper');
    $menu.toggleClass('invisible');
  },

  'click #explore-destinations': function(e, template) {
    e.preventDefault();

    var $destinationMainPage =  $('.destination-main-page');
    $destinationMainPage.off("tap");
    toggleMenu();
    Router.go('/destinations');
  },

  'click #filter-destinations': function(e, template) {
    e.preventDefault();

    var $destinationMainPage =  $('.destination-main-page');
    $destinationMainPage.off("tap");
    toggleMenu();
    Router.go('/filters');
  }
});