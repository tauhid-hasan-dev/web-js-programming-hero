//to check the type of an array we can use Array.isArray(arr) (best way)

const arr = [11, 12, 14, 16, 17];

console.log(typeof arr);//output will be object if we do this way.
console.log(Array.isArray(arr));//this is the best way to check if it is an array or not;


//array.includes(element)- to check if a element is available in the array of not
const arr2 = [38, 12, 14, 16, 28];
const arr3 = ['me', 'you']

console.log(arr2.includes(32));//output will be false

console.log(arr3.includes('they'));//output will be false

/* old way to do this */

if (arr2.indexOf(12) !== -1) {
    console.log(true);
}

/* we can concat arrays */
const arrayConcat = arr2.concat(arr3);
console.log(arrayConcat);




