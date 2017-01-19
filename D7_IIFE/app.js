// scope protects the the firstname Jane from being changed. 

var firstname = "Jane";

(function (lastname) {
  var firstname = 'John';
  console.log(firstname);
  console.log(lastname);
}("Doe"));

console.log(firstname);
