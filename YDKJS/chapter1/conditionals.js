// The most common conditional is the if statement
var bank_balance = 302.13;
var amount = 99.99;

// if takes an argument
if(amount < bank_balance){
    // and executes the block if the argument resolves to true
    console.log( "I want to buy this phone!" );
}


// There's another way if can work, if the block ends
// in an else block. Then it will execute the else
// block if if's argument resolves to false.

const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

// can we afford the extra purchase?
if ( amount < bank_balance ) {
    console.log( "I'll take the accessory!" );
    amount = amount + ACCESSORY_PRICE;
}
// otherwise:
else {
    console.log( "No, thanks." );
}

// js implicitly converts most data to true, with the
// exception of 0 and ""
