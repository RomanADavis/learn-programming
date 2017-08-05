function foo(something) {
    this.a = something;
}
undefined
var obj1 = {
    foo: foo
}
undefined
var obj2 = {};
undefined
obj1.foo( 2 );
undefined
obj1.a;
2
obj1.foo.call( obj2, 3)
obj2.a// 3

var bar = new obj1.foo( 4 );

obj1.a;// 2
bar.a;// 4

// new binding always has higher presidence