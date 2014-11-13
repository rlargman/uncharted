/** 
 * Destinations collection. Format should be:
 * {
 *   name: "Hike this example trail",
 *   location: "City, Country" OR "Country" OR "Region",
 *   description: "Here is an example description that says some things about
 *     the activity that we are describing. Visit www.exampleHiking.com."
 *   cost: 50
 *   image: "path/to/image.jpg"
 *   type: "Dining"
 * }
 *
 *  
 */
Activities = new Mongo.Collection('activities');