//it changes the original array 
//Removes elements from an array 
//if necessary, inserts new elements in their place
//returning the deleted elements.
//will change the original array
//splice will include the end point array(slice does not include the end point array)
// you can add element from the third parameter.

const arr = [11, 13, 45, 56, 77, 78, 56, 89, 90]

console.log(arr.splice(2, 6, 99, 777, 563));
console.log(arr);


