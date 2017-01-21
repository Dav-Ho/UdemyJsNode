// object literal
function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

var john = new Person("David", "Ho");
var amy = new Person("Amy", "Tai");

    // prototype is a build-in object function that allows other objects to inherit
    //methods or properties.

    Person.prototype.greet = function() {
        console.log("Welcome " + this.firstname + " " + this.lastname);
    };


console.log(john.firstname + " " + john.lastname);
john.greet()

console.log(amy.firstname + " " + amy.lastname);
amy.greet()
