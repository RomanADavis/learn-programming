// Immediately invoked function expressions are code
// seperated into functions that are used oncs
// immeadiately.

// I'm not sure why you'd use this.
(function IIFE(){
    console.log( "Hello!" );
})();

// You can use them to make a new scope
var a = 42;

(function IIFE(){
    var a = 10;
    console.log( a ); // 10
})();
//10

console.log(a);
//42

// and they can return stuff
var x = (function IIFE(){
    return 42;
})();

x;
42