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

// I think I sort of get that closure is access to scope after a function has
// been called. But, right now, that seems sort of trivial. 

// Still, IIFE are even more trivial.

var a = 2;
undefined
(function  IIFE(){
    console.log( a );
})();
// 2

// There is no opportunity to observe an IIFE closure.