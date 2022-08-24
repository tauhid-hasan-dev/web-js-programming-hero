const numbers = [12, 13, 14, 15];
//console.log(numbers);

const numbers2 = [100, 200, ...numbers, 34, 45];
numbers.push(55);
numbers2.push(89);


//console.log(numbers);
console.log('==========================')

//console.log(numbers2);


const maxNum = Math.max(12, 13, 14, 15);
//console.log(maxNum);
const maxNumOfArr = Math.min(...numbers);
console.log(maxNumOfArr);