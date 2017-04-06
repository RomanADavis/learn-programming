function anotherFunction() {}

var anotherObject = {
  c: true
};

var anotherArray = [];

var myObject = {
  a: 2,
  b: anotherObject, // reference
  c: anotherArray, // reference
  d: anotherFunction
};

anotherArray.push( anotherObject, myObject );
