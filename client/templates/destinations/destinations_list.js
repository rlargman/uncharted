Template.destinationsList.helpers({
  /**
   * Returns the first destination after transforming all destination with next
   * and prev properties.
   *
   * @return  the first destination
   */
  firstDestination: function() {
    return Destinations.findOne();
  }
});