var greeting = "This is greeting 5";

function greet() {
  console.log(greeting);
}
module.exports = {
  greet: greet  //This is a  revealing hidden module only the property or method requested.
};
