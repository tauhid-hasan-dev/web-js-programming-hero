//slice does not change the main array
//Returns a copy of a section of an array
//For both start and end, a negative index can be used to indicate an offset from the end of the array.For example, -2 refers to the second to last element of the array.

const arr = [11, 13, 45, 56, 77, 78, 56, 89, 90]

const partial = arr.slice(2, 6);
const indexToEnd = arr.slice(3);
const endToStart = arr.slice(-4); // it will take last four 


console.log(partial);
console.log(indexToEnd);
console.log(endToStart);
console.log(arr);