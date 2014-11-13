// Fixture data. Refer to destinations.js for schema
var fixture_destinations = [
  { 
    name: "hello",
    price: 8.99,
  },
  {
    name: "secondHEllo",
    price: 10,
  }
];


// Inserts fixture destinations if there are currently none
if (Destinations.find().count() === 0) {
  for (var i = 0; i < fixture_destinations.length; i++) {
    var destination = fixture_destinations[i];
    Destinations.insert(destination);
  } 
}