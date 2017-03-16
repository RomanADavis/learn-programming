// Here's a function that has 3 variables in
// their own function scop, plus a function
// in inside the function scope.

function foo(a) {
    var b = 2;
    
    // some code
    
    function bar() {
        // ...
    }
    
    // more code
    
    var c = 3;
}

// we can call the function and it'll work.
foo(2);

// but calling any of it's variable or the bar
// function will fail.
a;
//VM2087:1 Uncaught ReferenceError: a is not defined
//    at <anonymous>:1:1

bar();
//Uncaught ReferenceError: bar is not defined
//    at <anonymous>:1:1

