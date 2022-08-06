//problem-1: find the sum of an array
//problem-2: find the odd numbers from an array 
//problem-3: find the sum of the odd numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum of array
function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const number = numbers[index];
        sum = sum + number;
    }
    return sum;
}

// find the odd numbers from an array
function oddOfArray(inputArr) {
    let oddNumbers = [];
    for (let i = 0; i < inputArr.length; i++) {
        const index = i;
        const number = inputArr[index];
        if (number % 2 === 1) {
            oddNumbers.push(number)
        }
    }
    return oddNumbers;
}
//sum of array
const totalOfArray = sumOfArray(numbers);
console.log(totalOfArray);

// find the odd numbers from an array
const allOddNumbers = oddOfArray(numbers);
console.log(allOddNumbers);

//sum of all the odd numbers in an array
const sumOfOddNumbersArray = sumOfArray(allOddNumbers);
console.log(sumOfOddNumbersArray);


