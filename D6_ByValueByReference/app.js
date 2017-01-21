// pass by value

function change(b){
  b = 2;
}

var a = 1;
change(a);
console.log(a);

// pass by reference when variables are objects.
function changeObj(d) {
    d.prop1 = function () {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);  // { prop1: [Function], prop2: {} }

// var c was changed by with prop1 = a function and prop2 was added as well.
// when we call changeObj, the parameter d points to the same memory location of c.


// Objects are able to be changed through pass by reference. 
