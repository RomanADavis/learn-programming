function foo(a) {
    var b = a;
    return a + b;
}

var c = foo( 2 );
// Identify all three LHS in the short program

// 1.) a is assigned 2 when foo is called with 2
// 2.) b is assigned a (2) in the first line of foo
// 3.) c is assigned foo(2) -> a + b -> a + a -> 2 + 2 -> 4

// Identify all four RHS in the short program

// 1.) foo(2) is assigned to c.
// 2.) 2 is assigned to a.
// 3.) a is assigned to b
// 4.) a + b is returned from foo.

