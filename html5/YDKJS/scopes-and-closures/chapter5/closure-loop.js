// This is actually really weird, but this just gives me the impression that
// defining a function in a loop is dumb.
for( var i = 1; i <= 5; i++) {
    setTimeout(function timer(){
        console.log( i );
    }, i * 1000 );
}

// Sets the function into an IIFE, still doesn't work.
for(var i = 1; i <= 5; i++) {
	( function(){
    	setTimeout( function timer(){
        	console.log( i );
    	}, i*1000 );
    })();
}

// Now that I look at it, it seems obvious. Why would you just define the same
// function over and over?

for(var i = 1; i <= 5; i++) {
	( function(){
		var j = i;
    	setTimeout( function timer(){
        	console.log( j );
    	}, j*1000 );
    })();
}

// This is a bit nicer

for(var i = 1; i <= 5; i++) {
	( function(j){
    	setTimeout( function timer(){
        	console.log( j );
    	}, j*1000 );
    })( i );
}


// We can fix a little bit of this wierdness by using let for our variables in
// loops.
for (let i = 1; i <= 5; i++){
    setTimeout( function timer(){
        console.log( i );
    }, i * 1000 );
}

