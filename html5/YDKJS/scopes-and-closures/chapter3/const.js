var foo = true;
undefined
if (foo) {
    var a = 2;
    const b = 3; // block scope const
    
    a = 3; // good!
    b = 4; // you aren't supposed to do that!
}
// => TypeError: Assignment to constant variable.
a; // => 3

b; // your variable is in another scope!
