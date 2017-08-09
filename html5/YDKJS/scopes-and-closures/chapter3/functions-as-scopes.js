// So, over and over again, we've used
// functions as a wrapper to hide
// variables and make new scope.

var a = 2;

function foo() {
    
    var a = 3;
    return a; // 3
}

foo();
// => 3
a;
// => 2

// but foo() itself pollutes the
// global envionment! How can we get
// rid of it?

var a = 2;

(function foo(){
    var a = 3;
    
    return a;
})();
// => 3
a;
// => 2
