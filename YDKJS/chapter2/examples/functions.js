// Functions hold code. They have names and can
// be very simple.

function foo() {
    return 42;
}
//=>undefined

// Wait functions have properties!?
foo.bar = "hello world";
//=>"hello world"

// The function itself can be treated like a
// normal variable when called without
// parenthesis.

typeof foo;
//=>"function"

// And will return it's expected value when it
// is called with parenthesis.

typeof foo();
//=>"number"

// And can have properties and callable functions
// like any other object, but it's not always a 
// good idea.

typeof foo.bar;
//=>"string"