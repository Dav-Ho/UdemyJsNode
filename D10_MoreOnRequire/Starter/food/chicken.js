var food = require("./food.json")  // require the json file

var chicken = function() {
  console.log(food.restaurant1);  // Grab method from json file
};


module.exports = chicken; // allow access to module chicken.
