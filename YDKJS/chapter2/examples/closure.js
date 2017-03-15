// So, thought I understood closures pretty well from
// Ruby, meaning something like, "a block of code you
// can pass into your function." Here though, they seem
// to mean, "a function that returns a function."

function makeAdder(x) {
    // parameter 'x' is an inner variable
    
    // inner function add uses 'x', so
    // it has a 'closure' over it.
    function add(y) {
        return y + x;
    }
    
    return add;
}

function makeAdder(x) {
    // parameter 'x' is an inner variable
    
    // inner function add uses 'x', so
    // it has a 'closure' over it.
    function add(y) {
        return y + x;
    }
    
    return add;
}

var plusOne = makeAdder( 1 );

var plusTen = makeAdder( 10 );

plusOne( 3 );
// => 4
plusOne( 41 );
// => 42
plusTen( 13 );
// => 23

// This seems like a really trivial use case to me,
// but I bet this becomes amazingly powerful if you
// pass a function in.
