// You can set default argument values in ES6+
// It works how you would expect in firefox.

function foo(a = 2) {
    console.log( a );
}

foo();
//2

foo( 42);
//42

// But what if you needed the code to work in
// ES5?

// You could use a transpiler to turn the
// above code into this:

function foo() {
    var a = arguments[0] !== (void 0) ? arguments[0] : 2;
    console.log( a );
}

// This will still set the first argument to
// 2 if no argument is given.