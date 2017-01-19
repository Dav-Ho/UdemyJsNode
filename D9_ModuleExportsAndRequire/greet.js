var greet = function() {
  console.log("Testing out this code");
};

// module.exports is what the require function returns
module.exports = greet;

// require and module.exports work because your code is wrapped in a function
//that express these things as function parameters.  
