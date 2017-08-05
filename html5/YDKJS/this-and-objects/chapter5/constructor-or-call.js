// Calling a function with new causes it to create an object, no matter what
// the function actually *does* even if that thing is actually sort of lame.

function Greeting() {
  console.log("I just wanted to say, \"Hi!\"");
}

var a = new Greeting();
// I just wanted to say, "Hi!"

a; // Object {  }
