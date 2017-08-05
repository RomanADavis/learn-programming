// js variables doesn't have true declared datatypes of strongly
// typed languages such as C, but it does use the var variable
// to declare local scope. This pattern is called duck typing,
// and the lack of datatype declaration is called dynamic
// typing.

var amount = 99.99;
//undefined
amount = amount * 2;
//199.98
console.log( amount );
//undefined
//Convert to string and append dollar sign
amount = "$" + String( amount ); //"$199.98"
console.log( amount );
//undefined

// Converting data to a new type and representing it by the
// the same variable would be impossible without dynamic
// typing.

// Here's an example using constants, which by convention are
// written in all caps with underscores (_) between words.

var TAX_RATE = 0.08; // 8% sales tax
//undefined
var amount = 99.99;
//undefined
amount = amount * 2;
//199.98
amount = amount + ( amount * TAX_RATE);
//215.9784
console.log( amount ); // 215.9784
//undefined
console.log( amount.toFixed( 2 ) ); // "215.98"

// You can also declare constants with const if you're using
// ES6+
const TAX_RATE = 0.08;


