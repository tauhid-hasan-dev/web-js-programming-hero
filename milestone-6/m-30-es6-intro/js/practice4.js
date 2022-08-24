/* Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. */

const arrOne = [23, 34, 56, 77];
const arrTwo = [40, 50, 60, 70];

const combinedArray = (arr1, arr2) => {
    const combinedArr = [...arr1, ...arr2];
    const maximumNum = Math.max(...combinedArr);
    return maximumNum;
}

const maxNum = combinedArray(arrOne, arrTwo);
console.log(maxNum)