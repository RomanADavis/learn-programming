// So, deeper scope tends to override shallower
// scope when two variables have the same name,
// but there are ways to work around this too.

// For example, window.a will call a from the
// global environment even if it's shadowed by
// a in a deeper scope.

var a = 10;

function foo() {
    var a = 21; // shadows 10
    return [window.a, a];
}

foo();
// => [10, 21]