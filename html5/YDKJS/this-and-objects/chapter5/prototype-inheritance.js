function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function() {
  return this.name;
};

function Foo.prototype.myName()

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myLabel = function() {
  return this.label;
}
function Bar.prototype.myLabel()
var a = new Bar("a", "obj a");

a.myName();  //"a"
a.myLabel(); //"obj a"
