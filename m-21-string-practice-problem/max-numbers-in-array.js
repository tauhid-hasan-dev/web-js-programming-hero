//write a function to find the largest number in an array

function maxInArray(inputArr) {
    let largest = inputArr[0];
    for (i = 0; i < inputArr.length; i++) {
        const index = i;
        const result = inputArr[index];
        if (largest < result) {
            largest = result;
        }
    }
    return largest;
}

const numbers = [12, 14, 15, 213, 456, 312];
const max = maxInArray(numbers);
console.log(max);