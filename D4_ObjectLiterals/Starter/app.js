// object literal 
var person = {
  firstname: 'John',
  lastname: 'Doe',
  greet: function() {
    console.log('hello, ' + " " + this.firstname + " " + this.lastname);
  }
};

person.greet();  // standard way to call an object literal.
