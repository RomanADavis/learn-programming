// This is from the book. It honestly looks like
// the same old boring scope to me.

function foo(a) {
    var b = a * 2;
    
    function bar(c) {
        console.log( a, b, c );
    }
    
    bar( b * 3 );
}

foo( 2 ); 
// 2 4 12

// Three scopes: foo, bar, and global