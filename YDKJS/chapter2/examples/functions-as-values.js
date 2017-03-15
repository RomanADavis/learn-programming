// The way we've called functions before is 
// pretty reminescent of strictly typed 
// languages,  except with explicit duck 
// typing.

function foo() {
    // content
}

// But unlike most of those languages, you
// can pass around a function just like any
// other variable, and even make
// anonymous functions.

var foo = function() { // anonymous function
    // content
}

var x = function bar() { // named function
    // content
}