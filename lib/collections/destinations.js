/** 
 * Destinations collection. Format should be:
 * {
 *   name: "3 days in Example",
 *   location: "City, Country" OR "Country" OR "Region",
 *   description: "Here is an example description that says some things about
 *     the place that we are describing."
 *   dailyBudget: 100,
 *   activities: [exID1, exID2, exID3],
 *   image: "path/to/image.jpg" 
 * }
 *  
 */
Destinations = new Mongo.Collection('destinations');
