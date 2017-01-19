// require is a function build in Node that searches for the module.
// a var is created for the require to allow it to be called on the app.js
 var welcome = require('./greet'); // to call the module, use require().

// module.exports = greet made this possible to displayed. 
  welcome();
