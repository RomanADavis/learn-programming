var myObject = {
a: 2
};

Object.preventExtensions( myObject );

myObject.b = 2;

myObject.b; //undefined
