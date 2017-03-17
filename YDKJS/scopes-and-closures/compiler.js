//  What does this do?

foo();

function foo() {
    console.log( a );
    
    var a = 2;
}

// It prints undefined

// The foo definition get hoisted,
// and the a declaration gets hoisted,
// otherwise we'd get a no reference
// error, but the assignment of a
// does NOT get hoisted. You could
// think of it as being equivalent to
// this:

function foo() {
    var a;
    
    console.log( a );
    
    a = 2;
}

foo();
//undefined

foo(); // not ReferenceError, but TypeError!

var foo = function bar() {
    // ...
};