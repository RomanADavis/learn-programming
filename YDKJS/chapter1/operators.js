// = is the assignment operator, for example:
a = 2;
// sets a to represent 2.

// + is the addition operator, for example:
b = a + 1;
// adds 1 to a and assigns the resulting value (3) to b.

// Variables should be declared before they're used, this is so
// they take on the local scope. Yes, JS vaiables are global by
// default. -_-

// Variables are declared with var.
var a = 20;
a = a + 1;
a = a * 2;

// Operations come in several types
// Math
1 + 2; // Addition
1 - 6; // Subtraction
7 * 8; // Multipication
9 / 2; // Division - not integer based!

// Compound assignment
// a (operator)= b is shorthard for
// a = a (operator) b. For examples
// a += 1 is equivalent to a = a + 1
a += 1; 
b -= 1;
a *= 2;
b /= 2;

// Increment / Decrement
a = 0;
a++; // shorthand for a += 1
b = 1;
b--; // shorthand for b -= 1

// Object property access
console.log( a ); // Calls the log function from console and executes it
console["log"]; // returns the log function from consoles

// Equality operators
// Has loose and strict equality because of JS's crazy implicit type
// conversions
1 == "1"; // Loose equality, returns true
1 === "1"; // Strict equality, returns false
1 != "1"; // Loose equality, returns false
1 !== "1"; // Strict equality

// Comparison operators
1 < 2; // true
1 <= 1; // true
1 > 2; // false
1 >= 1; // true

// Logical
// Logical or
true || true; // true
true || false; // true
false || false; // false
 
// Logical and
true && true; // true
true && false; // false
false && false; // false
