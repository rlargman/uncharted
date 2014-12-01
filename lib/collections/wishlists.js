/** 
 * Wishlists collection. Format should be:
 * {
 *   name: "Wishlist name here",
 *   destinations: [id of 1st destinaton, id of 2nd destination]
 * }
 *  
 */
Wishlists = new Mongo.Collection('wishlists');