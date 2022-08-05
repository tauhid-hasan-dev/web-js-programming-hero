var fruits = ['Apple', 'Banana', 'Orange'];

//find the index of banana
var indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana);

//replace banana with mango
fruits[1] = 'Mango';
console.log(fruits)

//romove orange 
var removeOrange = fruits.pop();
console.log(fruits);

//add watermelon
var addWatermelon = fruits.push('watermelon');
console.log(fruits);
