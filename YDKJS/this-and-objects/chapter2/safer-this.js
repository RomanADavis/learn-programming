function foo(a, b) {
    console.log( "a:" + a + ", b:" + b );
}

// empty object
var o = Object.create( null );

// spread out array as arguments
foo.apply( o, [2, 3] ); // a:2, b:3
var bar = foo.bind( o, 2 );

bar( 3 );//a:2, b:3