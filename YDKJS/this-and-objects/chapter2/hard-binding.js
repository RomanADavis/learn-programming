function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

// hard binds to obj
var bar = function() {
	foo.call( obj );
};

bar();
// 2

setTimeout( bar, 100 ); // 2
// 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window );
// 2

// You can also wrap a function in a hard binding like this
function foo( something ) {
    console.log( this.a. something );
    return this.a + something;
}

var obj = {
    a: 2
}

var bar = function() { // wrap
    return foo.apply( obj, arguments );
}

var b = bar( 3 );

console.log( b );// 5

//Or create a helpful wrapper function.
function foo( something ) {
    console.log( this.a, something );
    return this.a + something;
}

// this is a simple bind helper
function bind( fn, obj ) {
    return function() {
        return fn.apply( obj, arguments );
    };
}

var obj = {
    a: 2
}

var bar = bind( foo, obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5

// But wait, there's a built in bind function!

function foo(something) {
    console.log( this.a, something );
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
b; // 5