// Normal iteration over arrays
var array = [1, 2, 3];

for(var i = 0; i < array.length; i++) {
console.log(array[i]);
}
//1 2 3

// But this iterate over the indices of the array rather than it's elements.
// That's kind of beating around the bush, isn't it? Is there a better way to do
// this?
var array = [1, 2, 3];

for(var element of array){
console.log(element);
}
//1 2 3

// So, how does that work exactly? Well, arrays have a built in iterator object.
// This iterator returns a value at an element, and, between iterations, calls
// next until it's done.
// Let's see for ourselves, shall we?
var array = [1, 2, 3];

var iterator = array[Symbol.iterator]();

iterator.next(); // Object { value: 1, done: false }
iterator.next(); // Object { value: 2, done: false }
iterator.next(); // Object { value: 3, done: false }
iterator.next(); // Object { value: undefined, done: true }
