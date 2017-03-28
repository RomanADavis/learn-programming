// You can make functions much more easily with arrow (=>) syntax.

function foo() {
    // return a function that uses arrow syntax
    return (a) => {
        // 'this' here is lexically adopted fr'm 'foo()'
        console.log( this.a );
    };
}

var object1 = {
    a: 2
};

var object2 = {
    a: 3
};

var bar = foo.call( object1 );

bar.call( object2 ); // 2, not 3!