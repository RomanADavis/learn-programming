// Many built-in functions contain an optional argument for "this," usually
// called the context.

function foo(el) {
    console.log(el, this.id );
}

var obj = {
    id: "awesome"
};

[1, 2, 3].forEach( foo, obj /* context */);// 1 "awesome" 2 "awesome" 3 "awesome"