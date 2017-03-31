var strPrimitive = "I am a string";
typeof strPrimitive;							// "string"
strPrimitive instanceof String;					// false

var strObject = new String( "I am a string" );
typeof strObject; 								// "object"
strObject instanceof String;					// true

// inspect the object sub-type
Object.prototype.toString.call( strObject );

// This is a bit of weird, but strings made in the normal way are just
// primitives of type string, while strings mades with the string constructor
// are objects and instances of the constructor's class.