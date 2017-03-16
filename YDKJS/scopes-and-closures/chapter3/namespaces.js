// It's easy for a big JS program to run
// over itself with the number or functions
// in the global environment. Why not "hide"
// them in their own object scope?

var myReallyCoolLibrary = {
    awesome: "stuff",
    doSomething: function() {
        // content
    },
    doAnotherThing: function() {
        // content
    }
};