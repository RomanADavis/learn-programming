function foo() {
    return this.a;
}

var a = 2;

foo();
//2
// Simple, right?

// But it is weird. Why the hell would we want this to access the global
// environment?
// Strict mode doesn't allow this stupid crap.
function foo() {
    "use strict"; // turn on strict mode
    
    return this.a;
}

var a = 2;

foo();// TypeError