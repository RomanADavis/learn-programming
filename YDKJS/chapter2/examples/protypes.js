// You can initialize an object and add properties
// to an object like so.

var foo = {
    a: 42
}

// creat a 'bar' and link it to 'foo'
var bar = Object.create( foo );

bar.b = "hello world";

bar.b;
// => "hello world"
bar.a;
// => 42

// This makes sense if you've made peace with the
// fact that it's just a hash.

foo["c"] = true;
// => true
foo.c;
// => true