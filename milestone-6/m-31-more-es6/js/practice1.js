/* You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */

//with for loop 
const numbers = [1, 3, 5, 7, 9];
let arr = [];
for (let number of numbers) {
    const plusOne = number + 1;
    arr.push(plusOne);
}
//console.log(arr);

//with map method 
const newNumbers = numbers.map(x => x + 1);
//console.log(newNumbers);



/* You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. */
const numbersArr = [33, 50, 79, 78, 90, 101, 30];
const numbersArrFilterd = numbersArr.filter((x) => {
    return x % 10 === 0
})
//console.log(numbersArrFilterd);


/* 
Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. */
const numbersArrFilterdFind = numbersArr.find((x) => {
    return x % 10 === 0
})
console.log(numbersArrFilterdFind);


