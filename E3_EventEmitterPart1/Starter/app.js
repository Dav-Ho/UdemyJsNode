var Emitter = require("./emitter.js");

var emtr = new Emitter();

// this will run when 'greet' gets emitted
emtr.on('greet', function() {
  console.log("Hi how are you doing?");
});

emtr.on('greet', function() {
  console.log("I am doing well. What about you?");
});

emtr.on('greet', function() {
  console.log("Doing well. I got to go! Nice to see you");
});

console.log("Hello!");
emtr.emit("greet");
