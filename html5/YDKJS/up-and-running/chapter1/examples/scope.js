// Functions each have their own scope. Scope allows
// pieces of the program to be portable. Programmers
// don't have to worry about stepping on each other's
// toes when using the same variable name in
// different functions.

function one() {
    // this `a` only belongs to the `one()` function
    var a = 1;
    console.log( a );
}

function two() {
    // this `a` only belongs to the `two()` function
    var a = 2;
    console.log( a );
}

one();      // 1
two();      // 2

// You can nest functions to create deeper scope.
function outer(){
    var a = 1;
    
    function inner(){
        var b = 2;
        
        // inner has access to a and b!
        console.log( a + b ); // 3
    }
    
    inner();
    
    // we can access a here
    console.log( a );
} 

outer(); // prints 3, then 1.

// We've used the fact that we have access to 
// shallower local scope before, remember?
const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
    // calculate the new amount with the tax
    amt = amt + (amt * TAX_RATE);

    // return the new amount
    return amt;
}