// Types can be coerced implicitly or explicitly.

var a = "42";
// => undefined

// In javascript, the built in number function explicitly
// converts strings to numbers.

var b = Number(a);
// => undefined
a;
// => "42"
b;
// => 42