// JS has two equality operators.
var a = "42";
var b = 42;

// == allows for implicit coercion. This is
// often annoying.
a == b
// => true

// You should use === most of the time, as it 
// has behavior closer to what most programmers
// expect coming in from other languages.

a === b;
// => false

// More annoying JS behavior.
// Comparison between arrays is done by reference,
// like c, so arrays with identical contents in
// identical order are not considered equal if
// they point to different locations in memory.

// On the other hand, JS arrays can be coerced
// into strings. What!?

var a = [1,2,3];

var b = [1,2,3];

var c = "1,2,3";

a == c; // Totally
true
b == c; // bizarre
true
a == b; // This is annoying, but not weird.
false