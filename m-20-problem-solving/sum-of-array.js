//write a fucntion which will take an array as an input and return the sum of it.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arr(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const number = numbers[index];
        sum = sum + number;
    }
    return sum;
}

const totalOfArray = arr(numbers);
console.log(totalOfArray);