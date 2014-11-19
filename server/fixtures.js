// Fixture data. Refer to destinations.js for schema
var fixture_destinations = [
  { 
    name: "3 Days on the Dalmatian Coast",
    location: "Split, Croatia",
    description: "Here is some nonsense about Croatia. This is about two \
      sentences long. Perhaps three.",
    imageSrc: "earthporn.jpg",
    activities: [
      {
        name: "Hike this trail",
        description: "Outdoors stuff is awesome, yay. Do it all the time if \
          you like nature things and being outside."
      },
      {
        name: "Hike this trail",
        description: "Outdoors stuff is awesome, yay. Do it all the time if \
          you like nature things and being outside."
      },
      {
        name: "Hike this trail",
        description: "Outdoors stuff is awesome, yay. Do it all the time if \
          you like nature things and being outside."
      }
    ]
  },
  {
    name: "A week in the Andes",
    location: "Chile",
    description: "Here is some nonsense about Chile. This is about two \
      sentences long. Perhaps three.",
    imageSrc: "earthporn.jpg",
    activities: [
      {
        name: "Hike this trail",
        description: "Outdoors stuff is awesome, yay. Do it all the time if \
          you like nature things and being outside."
      },
      {
        name: "Hike this trail",
        description: "Outdoors stuff is awesome, yay. Do it all the time if \
          you like nature things and being outside."
      },
      {
        name: "Hike this trail",
        description: "Outdoors stuff is awesome, yay. Do it all the time if \
          you like nature things and being outside."
      }
    ]
  }
];


// Inserts fixture destinations if there are currently none
if (Destinations.find().count() === 0) {
  for (var i = 0; i < fixture_destinations.length; i++) {
    var destination = fixture_destinations[i];
    Destinations.insert(destination);
  } 
}