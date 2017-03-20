// A closure is when a function is able to access and remember it's scope even
// when that function is executed outside it's lexical scope.

// That sounds extremely trivial.

function foo() {
    var a = 2;
    
    function bar() {
        console.log(a); // 2
    }
    
    bar();
}

// But that's just basic lexical scope lookup rules.

// In some sense we could say that bar() has a closure over foo(), in that
// bar() is what we mean when we call bar() inside foo(), but bar() is not
// exposed, and so, like I said, is trivial.

function foo() {
    var a = 2;
    
    function bar() {
        console.log( a );
    }
    
    return bar;
}

var baz = foo();

baz();
// 2

// Yeah, so this seems very much like my working definition of a closure from
// before: a closure is when a function returns a function.