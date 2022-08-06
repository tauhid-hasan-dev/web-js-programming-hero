//write a function which will take a number as input and return its factorial.

function factorial(a) {
    let factorial = 1;
    for (let i = a; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
let f = factorial(8);
console.log(f);