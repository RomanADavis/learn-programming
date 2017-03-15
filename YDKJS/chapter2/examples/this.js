// This calls the lowest available object scope,
// like self in othe object oriented languages.

// Some interesting wrinkles: the global
// environment counts as an object for "this"
// and you can call new on a function to make
// a new foo object.
// and you can use call to allow a function to
// work in another object environment.

function foo() {
    console.log( this.bar );
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
};

foo();
//global

obj1.foo();
//obj1

foo.call( obj2 );
//obj2

new foo();
//undefined
// => foo {} <- ???