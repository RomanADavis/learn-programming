// There are a couple ways to check for the existence of Object properies, which
// differ in subtle ways.

var myObject = {
a: 2
};

("a" in myObject); // true
("b" in myObject); // false

myObject.hasOwnProperty( "a" ); //true
myObject.hasOwnProperty( "b" ); //false

// in checks for property names, which is a bummer if you like the behavior of
// "in" in Ruby and Python.
