var myObject = {
  // define a getter for 'a'
  get a() {
    return 2;
  }
}

Object.defineProperty(
  myObject, // target
  "b", // property name
  { // descriptor
    // define a getter for b
    get: function(){ return this.a * 2 },
    // make sure b shows up as an object property
    enumerable: true
  }
);// Object { a: Getter, b: Getter }

myObject.a;// 2
myObject.b;// 4

// Getters and setters override object scope values
var myObject = {
  // define a getter for a
  get a() {
    return this._a_;
  },

  // difine a setter for a
  set a(val) {
    this._a_ = val * 2;
  }
};

myObject.a = 2;

myObject.a; //4
