//there are multiple ways to swap values between variables

let first = 44;
let second = 10000;

// approach: one (using a temporary variable to store a value first )
let temp = first;

first = second;
second = temp;

console.log(first, second);

// approach: two (destructuring) note: destructuring can be done with arrays and obejects;

[first, second] = [second, first];
console.log(first, second);