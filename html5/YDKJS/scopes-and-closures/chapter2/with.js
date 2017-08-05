// with was usually used as a shorthand for
// changing many variables in an object
// scope.

var obj = {
    a: 1,
    b: 2,
    c: 3
}

obj.a = 2;
// => 2
obj.b = 3;
// => 3
obj.c = 4;
// => 4
with (obj) {
    a = 3;
    b = 4;
    c = 5;
}

// Unfortunately, things can get weird when
// you put with a function.

function foo(object) {
    with (object) {
        a = 2;
    }
}

var object1 = {
    a: 3
}

var object2 = {
    b: 3
}

foo( object1 );
object1.a;
// => 2
foo( object2 );
object2.a
// => undefined <- Huh?