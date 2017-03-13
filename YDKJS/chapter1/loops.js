// Looping constructs execute the same code over and
// over. Here's an example of a while loop and a
// do..while loop. They will both execute until
// their argument is false, but do..while loops are
// guaranteed to execute once

var numOfCustomers = 0;
//executes the block until it's argument is false
while(numOfCustomers > 0){
    console.log( "How may I help you?" );
    
    // help the customer...
    
    numOfCustomers = numOfCustomers - 1;
}

// versus

do{// Guaranteed to execute once!
    console.log( "How may I help you?" );
    
    // help the customer...
    
    numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0); // but otherwise the same
//>>How may I help you?
//>>-1

// Sometimes you might need more complex flow-control
// that. 

var i = 0;
while(true){ // wait, won't this run forever?
    if(i > 9){
        break; // breaks out of the loop.
    }
    
    console.log( i );
    i = i + 1;
}

// While loops can theoretically go on forever. Wouldn't
// it be nice if we had a loop that had it's ending
// condition, it's variable declaration and it's iteration
// all on one line?

// Enter the for-loop.
for(var i = 0 /* declares i */; i < 10 /* runs until i is 10 */; i++ /* increments i each iteration */){
    console.log( i );
}// prints 0..9

