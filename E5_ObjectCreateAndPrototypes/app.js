var person = {
  firstname: " ",
  lastname: " ",
  greet: function() {
    return this.firstname + " " + this.lastname;
  }
};


var john = Object.create(person);
john.firstname = "John";
john.lastname = "Lu";


var jane = Object.create(person);
jane.firstname = "Mary";
jane.lastname = "Chu";

console.log(john.greet());
console.log(jane.greet());
