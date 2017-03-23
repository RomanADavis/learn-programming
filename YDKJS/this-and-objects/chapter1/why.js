// Ths is a reference to the function itself.

function identify() {
    return this.name.toUpperCase();
}

identify();            // ""

function speak() {
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
}

var me = {
    name: "Kyle"
};

var you = {
    name: "Reader"
};

identify.call( me );   // "KYLE"
identify.call( you );  // "READER"
speak.call( me );      // Hello, I'm KYLE

speak.call( you );     // Hello, I'm READER

// In this case, we could have used the context explicitly, but sometimes this
// is cleaner

function identify(context) {
	return context.name.toUpperCase();
}

function speak(context) {
	var greeting = "Hello, I'm " + identify( context );
	console.log( greeting );
}

identify( you ); // READER
speak( me ); // Hello, I'm KYLE