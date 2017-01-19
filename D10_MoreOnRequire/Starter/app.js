
// since food folder does not have .js Node looks for the next file inside with .js
// this will go to index.js
var restaurant = require("./food");

restaurant.chicken();
restaurant.vegetable();
