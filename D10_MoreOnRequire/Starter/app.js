
// since food folder does not have .js Node looks for the next file inside with .js
// this will go to index.js
var greet = require("./food");

greet.chicken();
greet.seafood();
