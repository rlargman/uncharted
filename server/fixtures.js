// Fixture data. Refer to destinations.js for schema
var fixture_destinations = [

  // destination 1
  { 
    index: 0,
    name: "Galapagos, Ecuador",
    continent: "South America",
    description: "A must explore for outdoor enthusiasts and animal lovers, the Galapagos are an epic adventure.",
    lodging: "Hostal Loja",
    imageSrc: "destinations/galapagos.jpg",

    activities: [
      {
        name: "Las Loberias Beach",
        description: "Spend an afternoon with the Sea Lions on this beach of San Cristobal island. Make sure not to get too close!",
        imageSrc: "destinations/sealions.jpg"
      },
      {
        name: "Reserva El Chato",
        description: "Hike through this nature preserve to see giant tortoises in their natural habitat.",
        imageSrc: "destinations/Tortoise.jpg"
      },
      {
        name: "Kicker Rock",
        description: "Snorkel or dive with sting rays and land sharks. Book a tour with Ecuagringo Adventures.",
        imageSrc: "destinations/kickerrock.jpg"
      }
    ]
  },

  // destination 2
  { 
    index: 1,
    name: "Rio de Janeiro, Brazil",
    continent: "South America",
    description: "Rio offers the best of all worlds, some awesome outdoor spaces and enchanting culture.",
    lodging: "Cabana Copa Hostel",
    imageSrc: "destinations/rio.jpg",

    activities: [
      {
        name: "Sugar Loaf Mountain",
        description: "Get an amazing view of the city from the top of Sugar Loaf Mountain. Earn it by hiking from the beach, or take a cable car for $10.",
        imageSrc: "destinations/sugarloaf.jpg"
      },
      {
        name: "Cristo Redentor",
        description: "Get there early to miss the crowds at this must-do in Rio. Take the trolley up for more awesome views.",
        imageSrc: "destinations/Cristo.jpg"
      },
      {
        name: "Pedra do Sal",
        description: "Enjoy a Caipirinha in this funky neighborhood north of the city. The open air bar with live music makes a great night out.",
        imageSrc: "destinations/pedradesal.jpg"
      }
    ]
  },

  // destination 3
  { 
    index: 2,
    name: "Barcelona",
    continent: "Europe",
    description: "See awesome art & architecture, and party with Europe’s craziest in one of the world’s most unique cities.",
    lodging: "Hola Hostel",
    imageSrc: "destinations/barcelona.jpg",

    activities: [
      {
        name: "Park Güell",
        description: "Stroll through Gaudi’s park to appreciate the beautiful gardens and structures. Entrance is free.",
        imageSrc: "destinations/Park-Guell.jpg"
      },
      {
        name: "Picasso Museum",
        description: "The museum is home to the most extensive collection of Picasso’s work and is more than worth the cost of admission. Make sure to check out the collection on Las Meninas.",
        imageSrc: "destinations/Picasso.jpg"
      },
      {
        name: "Opium Cub",
        description: "Check out Barcelona’s nightlife at one of the most popular clubs. Snack on churros con chocolate on the beach out front until metro opens at 5am for a true Barcelona night.",
        imageSrc: "destinations/opium.jpg"
      }
    ]
  },

  // destination 4
  { 
    index: 3,
    name: "Florence, Italy",
    continent: "Europe",
    description: " A must in your lifetime, Florence has both natural beauty and some of the world’s best art & architecture.",
    lodging: "Hotel Benvenuti",
    imageSrc: "destinations/florence.jpg",

    activities: [
      {
        name: "Enjoy the Best Gelato",
        description: "Almost every block has a gelateria, and they’re all delicious. Be adventurous and try some wacky flavors.",
        imageSrc: "destinations/gelato.jpg"
      },
      {
        name: "Bike Tuscany",
        description: "Spend a day biking through the beautiful tuscany landscape, and stop for a few tastings at wineries. Rent bikes from Mike’s Bikes.",
        imageSrc: "destinations/tuscany.jpg"
      },
      {
        name: "Michelangelo’s David",
        description: "Its crowded, but you can’t miss David and the Galleria dell’Accademia. Buy tickets in advance online.",
        imageSrc: "destinations/david.jpg"
      }
    ]
  },

  // destination 5
  { 
    index: 4,
    name: "Hong Kong",
    continent: "Asia",
    description: "One of the World’s most modern cities, Hong Kong is a fascinating melting pot of people and cultures.",
    lodging: "Apple Hostel",
    imageSrc: "destinations/hongkong.jpg",

    activities: [
      {
        name: "Victoria Peak",
        description: "Hike Victoria Peak at dusk to catch the cityscape lightshow from the top. Enjoy Dinner at one of the many restaurants and then take the trolley down.",
        imageSrc: "destinations/victoria.jpg"
      },
      {
        name: "Lan Kwai Fong Bar District",
        description: "The world’s longest outdoor escalator takes you through a myriad of restaurants, bars and clubs with food, drinks and music from around the world. The streets of LKF are bustling every night of the week, don’t miss out.",
        imageSrc: "destinations/lkf.jpg"
      },
      {
        name: "Tian Tan Buddha",
        description: "Take the tram to Lantau island and see Hong Kong’s largest Buddha, which houses a monastery inside.",
        imageSrc: "destinations/buddha.jpg"
      }
    ]
  },

  // destination 6
  { 
    index: 5,
    name: "Phuket, Thailand",
    continent: "Asia",
    description: "Enjoy surreal beaches, great diving and exotic gardens on Thailand’s largest island.",
    lodging: "Pineapple Guesthouse",
    imageSrc: "destinations/phuket.jpg",

    activities: [
      {
        name: "Freedom Beach",
        description: "Take a longtail boat to this secluded beach, and spend the afternoon swimming in the pristine waters.",
        imageSrc: "destinations/freedom.jpg"
      },
      {
        name: "Old Phuket Town",
        description: "Explore this neighborhood for a relaxing afternoon appreciating Thai culture. ",
        imageSrc: "destinations/oldphuket.jpg"
      },
      {
        name: "Phuket Butterfly Garden",
        description: "Check out this pretty garden, and see butterflies sipping nectar, mating, laying eggs, and more.",
        imageSrc: "destinations/butterfly.jpg"
      }
    ]
  },

  // destination 7
  { 
    index: 6,
    name: "Sydney, Australia",
    continent: "Australia",
    description: "Enjoy the beaches, culture, art and cuisine of Australia's oldest and largest city.",
    lodging: "Kings Cross Backpackers",
    imageSrc: "destinations/sydney.jpg",

    activities: [
      {
        name: "Bondi to Coogee Coastal Walk",
        description: "Breathe in fresh, beachside air along this three mile route of the coast. The path through Waverley Cemetery to Coogee is actually the best bit.",
        imageSrc: "destinations/coogee.jpg"
      },
      {
        name: "Catch a Sydney Swam Rugby Game",
        description: "Catch a game at the Sydney Rugby stadium, ‘The Footy,’ in winter and witness some real fanaticism.",
        imageSrc: "destinations/footy.jpg"
      },
      {
        name: "Savor a tasty brunch at Pinbone",
        description: "Only open on Sundays, Pinbone offers an unparalleled brunch. Good coffee AND good food - what’s not to love?",
        imageSrc: "destinations/pinbone.jpg"
      }
    ]
  },
    // destination 8
  { 
    index: 7,
    name: "Auckland, New Zealand",
    continent: "Australia",
    description: "Auckland is located on the island of New Zealand and is a mountainous region. It is one of few cities to have two major harbours",
    lodging: "Lodge in the City",
    imageSrc: "destinations/auckland.jpg",

    activities: [
      {
        name: "Snorkel off Goat Island",
        description: "Goat Island is a protected marine area, so the snorkeling is some of the best.",
        imageSrc: "destinations/goatisland.jpg"
      },
      {
        name: "Mount Eden",
        description: "Part of the Pacific Ring of Fire, Auckland is covered in volcanoes. Mont Eden offers a spectacular view of the city. ",
        imageSrc: "destinations/mteden.jpg"
      },
      {
        name: "Auckland Art Gallery",
        description: "With free daily tours, an afternoon in the Art Gallery is a great way to spend ann afternoon and see some local art.",
        imageSrc: "destinations/aucklandartgallery.jpg "
      }
    ]
  },

  // destination 9
  { 
    index: 8,
    name: "Kauaii, Hawaii",
    continent: "North America",
    description: "Enjoy both the Pacific Ocean and the greenest mountains on this natural Hawaiin paradise.",
    lodging: "Kauaii Beach House",
    imageSrc: "destinations/kauaii.jpg",

    activities: [
      {
        name: "Snorkel Tunnels Reef",
        description: "See beautiful coral, sea turtles and tropical fish in this reef just off of Tunnels Beach on the north shore of the island.",
        imageSrc: "destinations/tunnels.jpg"
      },
      {
        name: "Hike to Hanakapiai Falls",
        description: "See stunning views of the Napali Coast as you hike to this 300ft water fall. Take a swim in the pool as a reward before hiking the 4 miles back!",
        imageSrc: "destinations/hanakapiai.jpg"
      },
      {
        name: "Have a Fish Taco at Pat's",
        description: "Have the best tacos of your life at this Taco truck on the beach in Hanalei.",
        imageSrc: "destinations/taqueria.jpg"
      }
    ]
  },

  // destination 10
  { 
    index: 9,
    name: "San Francisco",
    continent: "North America",
    description: "Explore one the United State’s most wacky and creative city. Hostel: Orange Village Hostel",
    lodging: "Orange Village Hostel",
    imageSrc: "destinations/sf.jpg",

    activities: [
      {
        name: "Baker Beach",
        description: "Enjoy awesome views of the Golden Gate from this little beach oasis just outside the city.",
        imageSrc: "destinations/bakerbeach.jpg"
      },
      {
        name: "Lolo’s in the Mission",
        description: "Taste the best mexican food the city has to offer from a number of restaurants in the Mission neighborhood. We recommend Lolo’s.",
        imageSrc: "destinations/lolo.jpg"
      },
      {
        name: "Learn and Play at Explorotorium ",
        description: "This fun and interactive museum on the piers of the San Francisco Bay will get your mind jogging with illusions and other fun exhibits.",
        imageSrc: "destinations/exploratorium.jpg"
      }
    ]
  },

  // destination 11
  { 
    index: 10,
    name: "Cape Town",
    continent: "Africa",
    description: "The city is famous for its harbour and landmarks suzh as Cape Point. Named one of the best places to visit by the New York Times",
    lodging: "Zebra Crossing",
    imageSrc: "destinations/capeTown.jpg",

    activities: [
      {
        name: "Museum Mile",
        description: "Government Avenue provides access to the city’s best museums, from the National Gallery to the Iziko Planetarium. Wander down the street and see what catches your eye. ",
        imageSrc: "destinations/capetownmuseummile.jpg"
      },
      {
        name: "Long Street",
        description: "Explore the laid back and funky bars on Long Street. Don’t miss Julep which has comfy couches and great cocktails. ",
        imageSrc: "destinations/julep-bar.jpg"
      },
      {
        name: "Beta Beach ",
        description: "Just 10 minutes out of the city center this small protected beach is great for a refreshing swim. ",
        imageSrc: "destinations/beta-beach.jpg"
      }
    ]
  },

  // destination 12
  { 
    index: 11,
    name: "Cairo, Egypt",
    continent: "Africa",
    description: "Explore some of the worlds most ancient and preserved artifacts. Hostel:  Family Palace, Downtown Cairo",
    lodging: "Family Palace, Downtown Cairo",
    imageSrc: "destinations/cairo.jpg",

    activities: [
      {
        name: "The Great Pyramid of Giza",
        description: "Visit one of the oldest seven wonders of the world. The great Pyramid of giza is a short distance from downtown cairo.",
        imageSrc: "destinations/greatPyramid.jpg"
      },
      {
        name: "Museum of Cairo",
        description: "The museum holds an extensive collection of ancient Egyptian artifacts. It is located in Cairo.",
        imageSrc: "destinations/cairoMuseum.jpg"
      },
      {
        name: "Islamic Cairo",
        description: "Visiting the Islamic Ciaro is stepping into a cultural wonderland that takes you back in time. ",
        imageSrc: "destinations/islamicCairo.jpg"
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