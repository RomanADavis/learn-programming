// Blocks can be used as a scope. Duh.
for(var i = 0; i < 10; i++){
    console.log( i );
}

// You wouldn't want the i to bu used
// outside the for-loop, right?

// You can do a similar thing with if

var foo = true;

if(foo) {
    var bar = foo * 2;
    bar = something( bar );
    console.log( bar );
}

// Also works with try-catch

try {
    undefined(); // illegal operation to force an exception!
}
catch (err) {
    console.log( err ); // works!
}

console.log( err ); // ReferenceError: `err` not found

// Unfortunately, block scoping can be 
// unreliable, but we can improve this 
// somewhat with the let keyword


var foo = true;

if(foo) {
    let bar = foo * 2;
    bar = something( bar );
    console.log( bar );
}

bar; // Error

// The book says that making another
// block can be more explicit, but I
// find this choice to be sort of stupid.

var foo = true;

if(foo) {
    {
        let bar = foo * 2;
        bar = something( bar );
        console.log( bar );
    }
}

bar; // Error

// let will not hoist.

{
    bar;
    let bar = 2;
}
// Uncaught ReferenceError: bar is not defined