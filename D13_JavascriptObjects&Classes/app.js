// object properties and methods
var obj = {
  greet: "hello"
};

// Two different ways to call methods of objects.
console.log(obj.greet); // dot notation is ideal
console.log(obj['greet']);

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
