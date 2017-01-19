
//function statement
function greet() {
  console.log("hi");
}

greet(); // call the function

// functions are first class, allowing them to act like variables

function logGreeting(fn) {
  fn();
}

logGreeting(greet);

// function expression.  Instead of a string or integer, it is a function expressed.
// The function is not defined since it is expressed as a variable.
var greetMe = function() {
  console.log("Hello Tony");
};

greetMe();
// it's first class

logGreeting(greetMe);

// use a function to expression to create a function on the fly
logGreeting(function(){
  console.log('Hello Tony!');
});
