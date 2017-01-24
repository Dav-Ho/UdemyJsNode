
var Eventemitter = require("events");
var util = require("util");

function Food() {
  this.meat = "chicken buritto";     // functionwith properties.
  this.vegetable = "Salad";
}

util.inherits(Food, Eventemitter);

//Inherits creates a prototype chain
// allowing any objects created from Food to be able to access properties of
//Eventemitter.

Food.prototype.meal1 = function() {
  console.log("Here is your " + this.meat);
  console.log("Here is your beverage water");
  this.emit("meal1");
};

Food.prototype.meal2 = function() {
  console.log("Here is your vegetable: " + this.vegetable);
  console.log("Here is your drink: Soda");
  this.emit("meal2");
};

var customer1 = new Food();

customer1.on('meal1', function() {
  console.log("Meal1 has been served");
});

customer1.on('meal2', function() {
  console.log("Meal2 has been served");
});

customer1.meal1();
customer1.meal2();
