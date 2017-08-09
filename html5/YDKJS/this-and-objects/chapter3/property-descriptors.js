var myObject = {
  a: 2
};

Object.getOwnPropertyDescriptor( myObject, "a" );
//  Object { value: 2, writable: true, enumerable: true, configurable: true }

// That's how you get to the properties of Objects

// What if we want to add our own?

var myObject = {);

Object.defineProperty( myObject, "a", {
value: 2,
writable: true,
configurable: true,
enumerable: true
} );

myObject.a; //2
