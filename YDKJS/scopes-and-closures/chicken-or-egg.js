// Hoisting is confusing.

a = 2;
var a;
a; // => 2

a; // => undefined
var a = 2;

