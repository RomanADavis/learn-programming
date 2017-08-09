// Oh man, it gets worse. There is no way to
// get arround JS's coercion rules. Why?
// Some inequality operators have no strict
// equivalents. :(

var a = 41;

var b = "42";

var c = "43";

a < b;
// => true
a < c;
// => true

// Wait, if strings are automatically
// coerced into integers for these
// operations, what happens with strings
// that don't make any sense as numbers?

var a = 42;

var b = "foo";

a < b;
false
a > b;
false
a == b;
false

// They return NaN when coerced, which
// always returns when compared with an
// actual number.