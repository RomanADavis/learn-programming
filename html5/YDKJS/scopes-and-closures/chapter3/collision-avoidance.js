// one reason for scope is to avoid value
// collision.

// Consider:
function foo() {
    function bar(a) {
        i = 3; // changes the i in the loop. :/
        console.log( a + i );
    }
    
    for( var i = 0; i < 10; i++) {
        bar( i * 2 ); // infinite loop. :/
    }
}

foo()

// Thanks to scope, all we have to do to fix it
// is declare i with the var keyword on line 7.
