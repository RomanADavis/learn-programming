// Some features of JS are not implemented in all browsers
// yet. An example is Number.isNaN which will return true
// if a Number is NaN.

// How can we get to those features? One technique is
// polyfilling.

// Basically, we check if the function already exists.
if (!Number.isNaN) {
    // Then we implement it if it doesn't.
    Number.isNaN = function isNaN(x) {
        return x !== x;
    }
}
