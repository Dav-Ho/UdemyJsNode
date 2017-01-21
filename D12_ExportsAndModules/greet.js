exports = function() {
  console.log("Hello");
};

// exports and module.exports are two different object.
// You cannot overwrite exports meaning (=), however, you can mutate it.
console.log(exports); // This while not change module.exports, instead it will create
// a new object.

console.log(module.exports);
