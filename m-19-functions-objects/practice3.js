/* 3) Challenging: Write a function called make_avg() which will take an array of integers and  the size of that array and return the average of those values. */

var inputArr = [2, 3, 4, 7, 9, 5];
var sum = 0;

function arrayOfAverage(integerArray, size) {
    for (i = 0; i < inputArr.length; i++) {
        sum = sum + integerArray[i];
    }
    var average = sum / size;
    return average;
}
var size = inputArr.length;
const averageOfArray = arrayOfAverage(inputArr, size);
console.log(averageOfArray);