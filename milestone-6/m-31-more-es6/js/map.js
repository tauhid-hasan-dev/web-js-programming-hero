//by the map function we can iterate and do certain operation on every element of an array and map function creates a new array and returns it. Actual array is not muted.

//forEach() is the same as map but foEach does not return anything;
//map and array will not modify the original array

const numbers = [2, 3, 4, 5, 6];
let newNumbers = [];
for (let number of numbers) {
    const plusOne = number + 1;
    newNumbers.push(plusOne);
}

//console.log(newNumbers);

const newNumbersMapped = numbers.map(x => x * 2);
//console.log(newNumbersMapped);


const persons = [
    { name: 'hasan', age: 25, height: '167cm', weight: '72kg' },
    { name: 'kamal', age: 25, height: '170cm', weight: '72kg' },
    { name: 'rashed', age: 85, height: '185cm', weight: '72kg' },
    { name: 'ajmal', age: 67, height: '190cm', weight: '72kg' },
]

const newArray = persons.map(person => person.name);
const newArrayAge = persons.map(person => person.age);


//console.log(newArray);
//console.log(newArrayAge);


persons.forEach(person => console.log(person)) //we can not get a value from a forEach method. that why we cant keep this line in a function like map.



