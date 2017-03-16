// Scope exists to "hide" as much as
// possible to limit unexpecte behavior.
// For example:

function doSomething(a) {
    b = a + doSomethingElse( a * 2);
    
    return b * 3;
}

function doSomethingElse(a) {
    return a - 1;
}

var b;

doSomething( 2 );
// => 15

// If the entire reason
// doSomethingElse() exists is to act 
// inside of doSomething, it may have
// unexpected behavior, so it can be
// better to do this.

function doSomething(a) {
    function doSomethingElse(a) {
        return a - 1;
    }
    
    var b;
    
    b = a + doSomethingElse( a * 2 );
    
    return b * 3;
}

doSomething( 2 );
// => 15

// This limits the amount of "exposure."