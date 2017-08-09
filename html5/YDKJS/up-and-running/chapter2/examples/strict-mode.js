// Okay, JS has all the crazies gotchas and unexpected
// behaviors, but really, a lot of writing good JS code
// is about programmer discipline. Is there anyway we
// can summon some sort of dominatrix to inforce it?

// Actually, yes.

// All you have to turn the JS engine into the domme
// you've always dreamed of is write the line:
// "use strict"; 
// in your preferred scope.

function foo() {
    "use strict";
    
    // this code is in strict mode
    
    function bar() {
        // this code is in strict mode
    }
}
// this code is NOT in strict mode

// Compare this to:

"use strict";
// => "use strict"
function foo() {
    // this code is in strict mode
    
    function bar() {
        // this code is in strict mode
    }
}

// this code is ALSO in strict mode

// Strict mode is supposed to bring up a
// reference error when you forget var.

// It didn't work the way I expected when
// I type into the console. Not sure why.

function foo() {
    "use strict"; // turn on strict mode
    a = 1; // var is missing. :/
}

foo();