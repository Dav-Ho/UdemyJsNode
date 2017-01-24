var EventEmitter = require('events'); // build in function used to call event
var util = require('util');

function Greetr() {
  this.greeting = "This is a property from greet1";
}

util.inherits(Greetr, EventEmitter); // this line allow the new variables created
// allow access to the funtion Greetr.

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit("greet", data);
};

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('This is the second greet2: ' + data);
});

greeter1.greet("Marcus");
