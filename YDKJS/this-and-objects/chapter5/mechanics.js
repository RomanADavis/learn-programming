function Student(name) {
this.name = name;
}

Student.prototype.myName = function() {
return this.name;
};

var a = new Student("a");
var b = new Student("b");

a.myName(); // "a"
b.myName(); // "b"
