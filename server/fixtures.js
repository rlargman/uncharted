// Fixture data. Refer to destinations.js for schema
var fixture_destinations = [
  { 
    name: "3 Days on the Dalmatian Coast",
    location: "Split, Croatia",
    imageSrc: "earthporn.jpg"
  },
  {
    name: "A week in the Andes",
    location: "Chile",
    imageSrc: "earthporn.jpg"
  }
];


// Inserts fixture destinations if there are currently none
if (Destinations.find().count() === 0) {
  for (var i = 0; i < fixture_destinations.length; i++) {
    var destination = fixture_destinations[i];
    Destinations.insert(destination);
  } 
}