// An example.
function wait(message) {
    setTimeout( function timer(){
        console.log( message );
    }, 1000);
    
}

wait( "Hello, closure!" );
// This is really neat. It returns undefined, then a second later, it prints
// the message. This means that the whole program isn't waiting for the
// function to finish doing it's thing! Cool!
VM2846:3 Hello, closure!