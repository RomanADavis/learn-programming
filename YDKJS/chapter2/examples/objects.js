// Objects used this way look an awful lot like ruby hashes/
// python dictionaries
var obj = {
    a: "hello world",
    b: 42,
    c: true
}
//=>undefined
// There's a way to call up object variables like a
// normal object.
obj.a;
//=>"hello world"
obj.b
//=>42
obj.c;
//=>true
// But you can also call them up like a hash!
obj["a"];
//=>"hello world"
obj["b"];
//=>42
obj["c"];
//=>true

// Since the hash style of accessing object variables uses
// a string, you can store it in a variable.

var a = "a";
//=>undefined
obj["a"];
//=>"hello world"