Template.filtersPage.events({
  /** 
   * 
   */
  'click #north-america': function(e, template) {
    e.preventDefault();
    Router.go('/filters/North America');
  },

  /** 
   * 
   */
  'click #south-america': function(e, template) {
    e.preventDefault();
    Router.go('/filters/South America');
  },

  /** 
   * 
   */
  'click #australia': function(e, template) {
    e.preventDefault();
    Router.go('/filters/Australia');
  },

  /** 
   * 
   */
  'click #africa': function(e, template) {
    e.preventDefault();
    Router.go('/filters/Africa');
  },

  /** 
   * 
   */
  'click #asia': function(e, template) {
    e.preventDefault();
    Router.go('/filters/Asia');
  },

  /** 
   * 
   */
  'click #europe': function(e, template) {
    e.preventDefault();
    Router.go('/filters/Europe');
  }
});