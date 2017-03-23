function baz() {
    // call-site is 'baz'
    // so, our call-site is in the global scope
    
    console.log( "baz" );
    bar();
}

function bar() {
    // call-stack is{ 'baz' -> 'bar'
    // so, our call-site is baz
    
    console.log( "bar" );
    foo();
}

function foo() {
    // bar is our call-site
    
    console.log( "foo" );
}

baz();