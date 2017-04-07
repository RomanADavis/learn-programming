var object = {a: 2};

var clone = Object.create(object);

object.a; // 2
clone.a;  // 2

object.hasOwnProperty("a"); // true
clone.hasOwnProperty("a");  // false

clone.a++;  // implicit shadowing!

object.a;   // 2
clone.a;    // 3

clone.hasOwnProperty("a"); // true <- See!?
