// Wouldn't it be nice if we had a way to break code
// up into individual pieces? Maybe we could even 
// save our fingers some work by using it over and
// over again.

// Enter functions.

function printPrice() {
    console.log( amount.toFixed( 2 ) );
}

var amount = 99.99;

printPrice(); // "99.99"

amount = amount * 2;

printPrice(); // "199.98"

// Just like variables represent and values that
// can be called around our program, functions 
// represent code that can be called around our 
// program.


// fuctions can take argument that can be worked
// with in function scope, which can help 
// disintangle scope.

function printAmount(amt) {
    console.log( amt.toFixed( 2 ) );
}

// fuctions can return things and operate inside
// your program as the variable they return.

function formatAmount() {
    return "$" + amount.toFixed( 2 );
}

var amount = 99.99;

printAmount( amount * 2 );      // "199.98"

amount = formatAmount();
console.log( amount );          // "$99.99"

// Here's an example using the return
const TAX_RATE = 0.08;

function calculateTotalPrice(price) {
    // calculate the new price with tax
    amount = amount + (amount * TAX_RATE);
    // return total
    return amount;
}

var amount = 99.99;

amount = calculateTotalPrice( amount );
/107.9892
console.log( amount.toFixed( 2 ) ); //107.99

// This way we can put code that does a single
// important thing in one place and give it an 
// appropriate name