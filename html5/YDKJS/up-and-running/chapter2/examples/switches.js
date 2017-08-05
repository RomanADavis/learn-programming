// It's easy to write tedious, dumb code
// like this

if(a == 2){
    // do something
}else if ( a == 10) {
    // do another thing
}else if ( a == 42 ) {
    // do yet antother thing
}else {
    // fallback
}

// Enter the switch, which is a little
// less verbose

switch (a) {
    case 2:
        // do something
        break;
    case 10:
        // do another thing
        break;
    case 42:
        // other stuff
        break;
    default:
        // fallback to here
}

// If you forget a break, the next case
// afterward, other case may run,
// including default.

// Duff's Device is an example of this
// being used to make something really
// cool, but it is very unusual to
// want this behavior.

switch (a) {
    case 2: // fallthrough, executes case 10
    case 10:
        // some cool stuff
        break;
    case 42:
        // other stuff
        break;
    default:
        // fallback
}