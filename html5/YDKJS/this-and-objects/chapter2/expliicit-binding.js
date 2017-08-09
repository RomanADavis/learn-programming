// So how do we make sure a function is being called from the object we want it
// to be called from?
function foo() {
    return this.a;
}

var object = {
    a: 2
}

foo.call( object );// 2