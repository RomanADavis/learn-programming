// Terenary allow you to make single like if-else
// statements and return on the same line.

// I like them a lot, but don't nest them. That way
// lies madness.

var a = 42;

var b = (a > 41) ? "hello" : "world";

b;
// => "hello"

// Equivalent to:
var b;

if(a > 41){
    b = "hello";
}else {
    b = "world"[]
}