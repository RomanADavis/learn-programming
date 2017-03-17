foo(); // 1

var foo;

function foo() {
    console.log( 1 );
}

foo = function() {
    console.log( 2 );
};

// Functions are hoisted by the compiler
// first, also, asignments aren't hoisted
// at all remember?

function foo() {
    console.log( 1 );
}

foo(); // 1

foo = function() {
    console.log( 2 );
};