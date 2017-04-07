var anotherObject = {
a: 2
}

// Create an object linked to "anotherObject"
var object = Object.create( anotherObject );

for (var k in object) {
  console.log("found: " + k);
}
//found: a

("a" in object); //true
