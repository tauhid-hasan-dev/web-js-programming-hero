/* You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

/* with for loop */
const numbers = [1, 9, 17, 50];
let sum = 0;
for (let number of numbers) {
    sum = sum + number;
}

/* with reduce  */
const reduced = numbers.reduce((previous, current) => {
    let sum = previous + current
    return sum;
}, 0)

console.log(reduced);