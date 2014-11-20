// Fixture data. Refer to destinations.js for schema
var fixture_destinations = [

  // destination 1
  { 
    name: "Galapagos, Ecuador",
    continent: "South America",
    description: "A must explore for outdoor enthusiasts and animal lovers, the Galapagos are an epic adventure.",
    lodging: "Hostal Loja",
    imageSrc: "galapagos.jpg",

    activities: [
      {
        name: "Las Loberias Beach",
        description: "Spend an afternoon with the Sea Lions on this beach of San Cristobal island. Make sure not to get too close!",
        imageSrc: "sealions.jpg"
      },
      {
        name: "Reserva El Chato",
        description: "Hike through this nature preserve to see giant tortoises in their natural habitat.";
        imageSrc: "Tortoise.jpg"
      },
      {
        name: "Kicker Rock",
        description: "Snorkel or dive with sting rays and land sharks. Book a tour with Ecuagringo Adventures.",
        imageSrc: "kickerrock.jpg"
      }
    ]
  },

  // destination 2
  { 
    name: "Rio de Janeiro, Brazil",
    continent: "South America",
    description: "Rio offers the best of all worlds, some awesome outdoor spaces and enchanting culture.",
    lodging: "Cabana Copa Hostel",
    imageSrc: "rio.jpg",

    activities: [
      {
        name: "Sugar Loaf Mountain",
        description: "Get an amazing view of the city from the top of Sugar Loaf Mountain. Earn it by hiking from the beach, or take a cable car for $10.",
        imageSrc: "sugarloaf.jpg"
      },
      {
        name: "Cristo Redentor",
        description: "Get there early to miss the crowds at this must-do in Rio. Take the trolley up for more awesome views.",
        imageSrc: "Cristo.jpg"
      },
      {
        name: "Pedra do Sal",
        description: "Enjoy a Caipirinha in this funky neighborhood north of the city. The open air bar with live music makes a great night out.",
        imageSrc: "pedradesal.jpg"
      }
    ]
  },

  // destination 3
  { 
    name: "Barcelona",
    continent: "Europe",
    description: "See awesome art & architecture, and party with Europe’s craziest in one of the world’s most unique cities.",
    lodging: "Hola Hostel",
    imageSrc: "barcelona.jpg",

    activities: [
      {
        name: "Park Güell",
        description: "Stroll through Gaudi’s park to appreciate the beautiful gardens and structures. Entrance is free.",
        imageSrc: "Park-Guell.jpg"
      },
      {
        name: "Picasso Museum",
        description: "The museum is home to the most extensive collection of Picasso’s work and is more than worth the cost of admission. Make sure to check out the collection on Las Meninas.",
        imageSrc: "Picasso.jpg"
      },
      {
        name: "Opium Cub",
        description: "Check out Barcelona’s nightlife at one of the most popular clubs. Snack on churros con chocolate on the beach out front until metro opens at 5am for a true Barcelona night.",
        imageSrc: "opium.jpg"
      }
    ]
  },

  // destination 4
  { 
    name: "Florence, Italy",
    continent: "Europe",
    description: " A must in your lifetime, Florence has both natural beauty and some of the world’s best art & architecture.",
    lodging: "Hotel Benvenuti",
    imageSrc: "florence.jpg",

    activities: [
      {
        name: "Enjoy the Best Gelato",
        description: "Almost every block has a gelateria, and they’re all delicious. Be adventurous and try some wacky flavors.",
        imageSrc: "gelato.jpg"
      },
      {
        name: "Bike Tuscany",
        description: "Spend a day biking through the beautiful tuscany landscape, and stop for a few tastings at wineries. Rent bikes from Mike’s Bikes.",
        imageSrc: "tuscany.jpg"
      },
      {
        name: "Michelangelo’s David",
        description: "Its crowded, but you can’t miss David and the Galleria dell’Accademia. Buy tickets in advance online.",
        imageSrc: "david.jpg"
      }
    ]
  },

  // destination 5
  { 
    name: "Hong Kong",
    continent: "Asia",
    description: "One of the World’s most modern cities, Hong Kong is a fascinating melting pot of people and cultures.",
    lodging: "Apple Hostel",
    imageSrc: "hongkong.jpg",

    activities: [
      {
        name: "Victoria Peak",
        description: "Hike Victoria Peak at dusk to catch the cityscape lightshow from the top. Enjoy Dinner at one of the many restaurants and then take the trolley down.",
        imageSrc: "victoria.jpg"
      },
      {
        name: "Lan Kwai Fong Bar District",
        description: "The world’s longest outdoor escalator takes you through a myriad of restaurants, bars and clubs with food, drinks and music from around the world. The streets of LKF are bustling every night of the week, don’t miss out.",
        imageSrc: "lkf.jpg"
      },
      {
        name: "Tian Tan Buddha",
        description: "Take the tram to Lantau island and see Hong Kong’s largest Buddha, which houses a monastery inside.",
        imageSrc: "buddha.jpg"
      }
    ]
  },

  // destination 6
  { 
    name: "Phuket, Thailand",
    continent: "Asia",
    description: "Enjoy surreal beaches, great diving and exotic gardens on Thailand’s largest island.",
    lodging: "Pineapple Guesthouse",
    imageSrc: "phuket.jpg",

    activities: [
      {
        name: "Freedom Beach",
        description: "Take a longtail boat to this secluded beach, and spend the afternoon swimming in the pristine waters.",
        imageSrc: "freedom.jpg"
      },
      {
        name: "Old Phuket Town",
        description: "Explore this neighborhood for a relaxing afternoon appreciating Thai culture. ",
        imageSrc: "oldphuket.jpg"
      },
      {
        name: "Phuket Butterfly Garden",
        description: "Check out this pretty garden, and see butterflies sipping nectar, mating, laying eggs, and more.",
        imageSrc: "butterfly.jpg"
      }
    ]
  },

  // destination 7
  { 
    name: "Sydney, Australia",
    continent: "Australia",
    description: "Enjoy the beaches, culture, art and cuisine of Australia's oldest and largest city.",
    lodging: "Kings Cross Backpackers",
    imageSrc: "sydney.jpg",

    activities: [
      {
        name: "Bondi to Coogee Coastal Walk",
        description: "Breathe in fresh, beachside air along this three mile route of the coast. The path through Waverley Cemetery to Coogee is actually the best bit.",
        imageSrc: "coogee.jpg"
      },
      {
        name: "Catch a Sydney Swam Rugby Game",
        description: "Catch a game at the Sydney Rugby stadium, ‘The Footy,’ in winter and witness some real fanaticism.",
        imageSrc: "footy.jpg"
      },
      {
        name: "Savor a tasty brunch at Pinbone",
        description: "Only open on Sundays, Pinbone offers an unparalleled brunch. Good coffee AND good food - what’s not to love?",
        imageSrc: "pinbone.jpg"
      }
    ]
  },

  // destination 8
  { 
    name: "",
    continent: "",
    description: "",
    lodging: "",
    imageSrc: "",

    activities: [
      {
        name: "",
        description: "",
        imageSrc: ""
      },
      {
        name: "",
        description: "",
        imageSrc: ""
      },
      {
        name: "",
        description: "",
        imageSrc: ""
      }
    ]
  },

  // destination 9
  { 
    name: "",
    continent: "",
    description: "",
    lodging: "",
    imageSrc: "",

    activities: [
      {
        name: "",
        description: "",
        imageSrc: ""
      },
      {
        name: "",
        description: "",
        imageSrc: ""
      },
      {
        name: "",
        description: "",
        imageSrc: ""
      }
    ]
  },

  // destination 10
  { 
    name: "",
    continent: "",
    description: "",
    lodging: "",
    imageSrc: "",

    activities: [
      {
        name: "",
        description: "",
        imageSrc: ""
      },
      {
        name: "",
        description: "",
        imageSrc: ""
      },
      {
        name: "",
        description: "",
        imageSrc: ""
      }
    ]
  },

  // destination 11
  { 
    name: "",
    continent: "",
    description: "",
    lodging: "",
    imageSrc: "",

    activities: [
      {
        name: "",
        description: "",
        imageSrc: ""
      },
      {
        name: "",
        description: "",
        imageSrc: ""
      },
      {
        name: "",
        description: "",
        imageSrc: ""
      }
    ]
  },

  // destination 12
  { 
    name: "",
    continent: "",
    description: "",
    lodging: "",
    imageSrc: "",

    activities: [
      {
        name: "",
        description: "",
        imageSrc: ""
      },
      {
        name: "",
        description: "",
        imageSrc: ""
      },
      {
        name: "",
        description: "",
        imageSrc: ""
      }
    ]
  },

// end
];


// Inserts fixture destinations if there are currently none
if (Destinations.find().count() === 0) {
  for (var i = 0; i < fixture_destinations.length; i++) {
    var destination = fixture_destinations[i];
    Destinations.insert(destination);
  } 
}