// This is a bit of code from the book.
// I didn't import JQuery first, so of course it didn't work, but as I 
// understand it, if you click on part of the page with an id of bot_1, it
// calls the activator function and writes the activating message to the
// console.

function setupBot(name, selector) {
    $( selector ).click( function activator(){
        console.log( "Activating: " + name );
    } );
}
undefined
setupBot( "Closure Bot 1", "#bot_1" );