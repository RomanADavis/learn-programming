function process(data) {
    // do something interesting
}
var someReallyBigData = {};

process( someReallyBigData );

var button = document.getElementById( "my_button" );

 button.addEventListener( "click", function click(event){
     console.log("button clicked");
}, /*capturingPhase=*/false );

// click doesn't need someReallyBigData at all.
// Wouldn't it be nice if we had a block to
// tell the compiler to get rid of the object
// once it's done?

function process(data) {
    // do something interesting
}

{ // Get rid of data when the block closes
    var someReallyBigData = {};

    process( someReallyBigData );
}

var button = document.getElementById( "my_button" );

 button.addEventListener( "click", function click(event){
     console.log("button clicked");
}, /*capturingPhase=*/false );
