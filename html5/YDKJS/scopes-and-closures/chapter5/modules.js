// Here's a function with internal functions

function foo() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log( something );
    }
    
    function doAnother() {
        console.log( another.join( "!" ) );
    }

}

// Here's a module
function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3,]
    
    function doSomething() {
        console.log( something );
    }
    
    function doAnother() {
        console.log( another.join( " ! " ) );
    }
    
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

// Since modules are just functions, they can take arguments

function CoolModule(id) {
    function identify() {
        console.log( id );
    }
    
    return {
        identify: identify
    };
}

var foo = CoolModule( "foo" );
var bar = CoolModule( "bar" );

foo.identify(); // foo

bar.identify(); // bar

// Commom pattern is to name the object the public API.

var foo = (function CoolModule(id) {
    function change() {
        // modifying the public API
        publicAPI.identify = identify2;
    }

    function identify1() {
        console.log( id );
    }

    function identify2() {
        console.log( id.toUpperCase() );
    }

    var publicAPI = {
        change: change,
        identify: identify1
    };

    return publicAPI;
})( "foo module" );

foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE