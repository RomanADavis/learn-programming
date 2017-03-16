// You can cheat and get around the normal
// rules of lexical scope by using eval,
// which evaluates and executes a string as
// if it was JS code.

function foo(assignment, a) {
    eval( assignment ); // cheating!
    return [a, b];
}

var b = 2;

foo("var b = 3;", 1);
// => [1, 3]

// It won't work in strict mode, since in
// strict mode eval has it's own scope.
var a = 10;

function foo(assignment) {
    "use strict";
    eval( assignment );
    return a;
}

foo( "var a = 2" );
// => 10

