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

// A common use case
function foo() {
    setTimeout(() => {
        // 'this' here is lexically adopted from 'foo()'
        console.log( this.a );
    }, 100);
}

var object = {
    a: 2
}

foo.call( object ); // 2

// You can do something similar with self = this
function foo() {
	var self = this; // lexical capture of `this`
	setTimeout( function(){
		console.log( self.a );
	}, 100 );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2