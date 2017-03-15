// The section on truthy and falsy seemed kind of dumb,
// so I went and wrote a function to prove it was at
// least accurate.

// Basically, JS implicitly converts types to booleans
// in certain situations. The ones that convert to true
// are called truthy and the ones that convert to false
// are called falsy.

// My function, truthiness() converts values to booleans
// implicitly and returns true or false. This way, we
// can find out which values are falsy and truthy for
// ourselves.

function truthiness(value) {
    if (value) {
        console.log( true );
    }else {
        console.log( false );
    }
}

// Empty strings return false.
truthiness("");
//false

// 0 and -0 return false
truthiness(0);
//false
truthiness(-0);
//false

// null is falsy
truthiness(null);
//false
// and, duh, false is falsy
truthiness(false);
//false

// nonempty strings are always truthy
truthiness("hello");
//true

// Numbers, even negative ones, are true if nonzero.
truthiness(42);
//true
truthiness(-42);
//true

// true is true, duh.
truthiness(true);
//true

// All arrays and objects, even empty ones, are truthy.
truthiness([]);
//true
truthiness({});
//true

// functions are truthy, and recursion is fun.
truthiness(truthiness);
//true

// Failed number conversion return NaN
Number("Roman");
// => NaN

// NaN is falsy.
truthiness(Number("Roman"));
//false

// Implicit conversion is often silly. For instance:
truthiness("false");
//true

// Be careful!