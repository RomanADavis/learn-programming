// Each variable in JS is one of a few data types.
// Let's see some examples and how to reveal the type with
// the typeof keyword.

var a;

typeof a;   //"undefined"

a = "hello world";

typeof a;   //"string"

a = 42;

typeof a;   //"number"

a = true;

typeof a;   //"boolean"

a = null;

typeof a;   //"object" <- considered a bug

a = undefined;

typeof a;   //"undefined"

a = {b: "c"};

typeof a;   //"object"

// There is one other type, symbols, that isn't shown here.