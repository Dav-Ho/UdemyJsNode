function greet(callback) {
  console.log('Hello');
  var data = {
    name: 'John Doe'
  };

  callback(data); 
}




greet(function(data) {
  console.log('The callback was invoked!');
  console.log(data);
});

greet(function(data) {
  console.log("This is the second callback");
  console.log(data.name);
});
