$(document).one("mobileinit", function() {
  $(body).class = "";
});

function toggleMenu() {
  var $menu = $('.menu-wrapper');
  $menu.toggleClass('invisible');
}

Template.layout.events({
  'click .menu-icon': function(e, template) {
    var $menu = $('.menu-wrapper');
    $menu.toggleClass('invisible');
  },
});