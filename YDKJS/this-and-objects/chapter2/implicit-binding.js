function foo() {
    return this.a;
}

var object = {
    a: 2,
    foo: foo
};

object.foo(); // 2

// Only the object from which from which the function is called counts, if that
// object is called in a longer object chain, it doesn't matter.

function foo() {
    console.log( this.a );
}

var object2 = {
    a: 42,
    foo: foo
};

var object1 = {
    a: 2,
    object2: object2
}
object1.object2.foo();
// 42