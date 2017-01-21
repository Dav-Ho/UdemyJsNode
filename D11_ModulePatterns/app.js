var greet = require("./greet1");
greet();

var bye = require("./greet2").greet;
 // returns an object and add a property on the object

bye();

var greet3 = require("./greet3");
greet3.greet();
greet3.greeting = "Changed the world!";

var greet3b = require("./greet3");
greet3b.greet();

var Greet4 = require("./greet4");
// in order to create a new greeter object, new must be added
var greetr = new Greet4();

greetr.greet();

var greet5 = require("./greet5").greet;
greet5(); 
