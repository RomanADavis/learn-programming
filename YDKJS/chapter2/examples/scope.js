// Scope can be nested. As a general rule,
// the deeper the scope, the more access,
// shallower scopes have less access.

// This goes for variables and functions.

function foo() {
    var a = 1;
    
    function bar() {
        var b = 2;
        
        function baz() {
            var c = 3;
            
             console.log( a, b, c ); // 1 2 3
        }
        
        baz();
        console.log( a, b ); 		 // 1 2
    }
    
    bar();
    console.log( a );				 // 1
}

foo();
// 1 2 3
// 1 2
// 1