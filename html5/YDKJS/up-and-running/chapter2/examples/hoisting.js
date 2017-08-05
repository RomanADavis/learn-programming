// So, scope can sometimes act unexpectedly if you
// aren't paying attention. Here's what makes it
// even worse: javascript has a mechanism called 
// "hoisting" which allows you to use variables
// and functions before they're declared. Ew!

var a = 2;

foo();

function foo() {
    a = 3;
    
    console.log( a ); // 3
    
    var a; // Wha!? I don't even. :/
}

console.log( a );
// 2

foo();
// 3