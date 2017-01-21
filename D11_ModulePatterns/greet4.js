function Greetr() {
  this.greeting = "This is greet4!";
  this.greet = function() {
      console.log(this.greeting);
  };
}

module.exports = Greetr
