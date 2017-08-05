// Writable determines if you can write to an object.
var myObject = {};

// So when it's set to false...
Object.defineProperty( myObject, "a", {
  value: 2,
  writable: false, // not writable!
  configurable: true,
  enumerable: true
} );

myObject.a = 3;
// Some obvious techniques won't work.
myObject.a; //2

"use strict";
var myObject = {};

Object.defineProperty( myObject, "a", {
value: 2,
writable: false, // not writeable
configurable: true,
enumerable: true
} );
Object { a: 2 }
myObject.a;

myObject.a = 3; // should give a TypeError with use strict, but is silently
                // failing on Mozilla Firefox on my version of ubuntu.
