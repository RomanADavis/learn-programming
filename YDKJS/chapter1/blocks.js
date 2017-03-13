var amount = 99.99;
//undefined
// a general block
{// blocks open with an open curly brace
    amount = amount * 2;
    console.log( amount );
}//and close with a close curly brace

// This is valid, but a little weird.
// Here's an example of something more
// common.

var amount = 99.99;
// a general block
if(amount > 10.00){
    amount = amount * 2;
    console.log( amount );
}
