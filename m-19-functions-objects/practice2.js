/* 2) Write a function called make_avg() which will take an three integers and return the  average of those values. */

function arrayOfAvg(num1, num2, num3) {
    const average = (num1 + num2 + num3) / 3;
    return average;
}

const averageofthree = arrayOfAvg(10, 30, 41);
console.log(averageofthree);