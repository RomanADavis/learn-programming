// Before JS is compiled, it needs to be parsed. First,
// code is turned into a bunch of tokens, so that
var a = 2 + 1;

// is turned into a list, something like,
var array = ["var", "a", "=", 2, "+", 1];

// This code is then parsed into a tree. A would end
// up on the left side, and 2 + 1 would be the right
// side, since those are the sides of the equal sign
// they are on.

// So, you can think of the compiler as having a "left 
// hand side" mode and a "right hand side mode." But 
// the way it's being used here is sort of weird. Most
// of the time, when using a variable, we're operating
// in RHS, since all we need is the data in the 
// variable, but when doing assignment, we operate in
// LHS, since we need... well, the book is a little
// vague, but it's probably implemented as a C pointer
// somewhere.

// so in
console.log( a );
// a is RHS

// while in
a = 2;
// a is LHS

// It can be more subtle than that, though. For example,
// this code contains an LHS a:
function foo(a) {
    console.log( a );
}

foo(2);
// 2

// Since foo has an argument named a, it acts as a
// variable and assigned when called, acting as a LHS.

