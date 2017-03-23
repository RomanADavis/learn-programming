// Is this a reference to the scope of the function?

function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log( this.a );
}

foo();
// undefined

// This is so weird.