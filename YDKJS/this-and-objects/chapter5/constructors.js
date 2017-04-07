// Sometimes we can treat functions like classes, complete with constructors.
// It's idiomatic to capitalize functions when treating them like classes.

function Foo() {}

var a = new Foo();

Foo.prototype.constructor === Foo; // true
a.constructor === Foo; //true
