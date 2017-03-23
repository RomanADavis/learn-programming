function foo(num) {
    console.log( "foo: " + num );
    
    // keep track of how many times "foo" is called
    this.count++;
}

foo.count = 0;

for ( var i = 0; i < 10; i++ ) {
    if ( i > 5 ) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// How many times was foo called?
foo.count; // 0
// -_-

// this.count and foo.count are different.
// Okay. But so what is this.count?
// It gets worse: it's a global set to NaN. :(

// Here's the obvious hack to work around this, should you need it.

function foo(num) {
    console.log( "foo: " + num );
    
    data.count++;
}

var data = {
    count: 0
}

for( var i = 0; i < 10; i++ ) {
    if ( i > 5 ) {
        foo( i )
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
data.count;
// 4

// Here's a better way.
function foo(num) {
    console.log( "foo: " + num );
    
    foo.count++;
}

foo.count = 0;

for(i = 0; i < 10; i++) {
    if (i > 5) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

foo.count;
// 4

// uses this
function foo(num) {
    console.log( "foo: " + num );
    
    this.count++;
}

foo.count = 0;

for(var i = 0; i < 10; i++){
    if(i > 5) {
		// uses call to make sure this points to foo
		foo.call( foo, i);
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

foo.count;
4