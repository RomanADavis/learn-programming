function foo(a) {
    this.a = a;
}

var bar = new foo( 2 );

bar.a; // 2