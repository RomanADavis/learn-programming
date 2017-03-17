// one nice way to use let is in loops

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// using let inside a loop will rebind
// on each iteration, which could be
// useful.

{
    let j;
    for (j = 0; j < 10; j++) {
        let i = j; // re-bound on each iteration!
        console.log( i );
    }
}