// We have the array type, which looks like a pretty
// normal ruby or python style list, rather than a
// true C-like array.

var array = [
    "hello world",
    42,
    true
 ];
//=>undefined
// Variables can be called up with their index in
// the usual way.

array[0];
//=>"hello world"
array[1];
\\=>42
array[2];
\\=>true

// And we have certain useful methods, like in
// python or ruby.

array.length;
\\=>3

// Wait, it has it's own functions. Doesn't that
// mean it's an object?

typeof array;
//=>"object"

// Yup.