// object properties and methods
var obj = {
  greet: "hello"
};

// Two different ways to call methods of objects.
console.log(obj.greet); // dot notation is ideal
console.log(obj['greet']);

// javascipt can use variables that can dynamically grab
// a values from properties or method on an object.

var prop = 'greet'; // value in obj
console.log(obj[prop]); // prop has the value of hello.

// functions and arrays
var arr = [];  //array is a collection of things

arr.push(function(){
  console.log("Hello World");
});

arr.push(function(){
  console.log("Hello World 2");
});

arr.push(function(){
  console.log("Hello World 3");
});

// loops through each object in the array and invoke them.
arr.forEach(function(item) {
  item(); // invoke
});

// Two important concepts to understand:
// 1. Variables can dynamically grab values from properties or method of an object.
// 2. Functions can be put into arrays and iterates through each function while invoking them.  
