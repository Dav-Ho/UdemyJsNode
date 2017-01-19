var greet = function() {
  console.log("hello");
};


// a special object that allows objects to be available outside.

module.exports = greet;

// This is exposing the variable greet outside of the module.
