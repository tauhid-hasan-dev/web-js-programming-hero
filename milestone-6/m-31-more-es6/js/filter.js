//filter will iterate over an array and return a new array based on a condition
//find is same as filter but it will return the first element based on a condition not an array.

const arr = [12, 34, 55, 67, 78, 78];
const newArray = arr.filter(number => number % 2 === 0);
const newArrayFind = arr.find(number => number % 2 === 0);
console.log(newArrayFind);