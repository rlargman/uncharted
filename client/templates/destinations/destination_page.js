Template.destinationPage.events({
  'click .destination-main-page': function(e, template) {
    e.preventDefault();

    var destinationId = template.data._id;
    console.log(destinationId);
    this.redirect('/details/' + destinationId);
  }
});