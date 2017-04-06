// By setting writable and configurable to false, we can create what are
// essentially constants in the object scope.

var myObject = {};

Object.defineProperty( myObject, "FAVORITE_NUMBER", {
value: 42,
writable: false,
configurable: false
} );
