'use strict'; // allows javascript to be pickier about certain commands.

// js node of making class.
class Person {
  constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
  }

// methods added inside the class, are added to the prototype
  greet() {
    console.log('Hello, ' + this.firstname + " " + this.lastname);
  }
}

// prototype way 
// Person.prototype.greet = function() {
//   console.log('Hello, ' + this.firstname + " " + this.lastname);
// };

var david = new Person('David', 'Ho');
david.greet();

var jane = new Person('Jane', 'Chu');
jane.greet();

console.log(david.__proto__);
console.log(jane.__proto__);
console.log(david.__proto__ === jane.__proto__);
