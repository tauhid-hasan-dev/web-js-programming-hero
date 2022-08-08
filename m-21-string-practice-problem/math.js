/* Math.pow(base , power) = to find the power of any number */

const result = Math.pow(6, 2);
console.log(result);

/* Math.abs() = to find differences of any thing. It ignore negetive values */

const num1 = 25;
const num2 = 50;

//gap = num1 - num2; // output will be negetive and condition will not work
gap = Math.abs(num1 - num2); // output will be the difference does not matter whether its positive or negetive.

if (gap > 5) {
    console.log("dont marry")
} else {
    console.log('marry')
}

//============ Math.round()===============//
console.log('//============= Math.round()================//');

const number = 10.44;
const number1 = 10.55;

console.log('rounds to the nearest number before .5 ', Math.round(number));
console.log('rounds to the nearest number after .5', Math.round(number1));



//============= Math.ceil()================//
console.log('//============= Math.ceil()================//');

console.log('rounds to the next(related maximum) number', Math.ceil(number));
console.log('rounds to the next(related maximum) number', Math.ceil(number1));




//============= Math.floor()================//
console.log('//============= Math.floor()================//');

console.log('rounds to the existed (related minimum) number', Math.floor(number));
console.log('rounds to the existed (related minimum) number', Math.floor(number1));


//============= Math.random()================//
console.log('//============= Math.floor()================//');

console.log(Math.floor(Math.random() * 6)); // 6 porjonto random number gula ber kora jabe 


console.log(Math.max(1, 2, 3));
console.log(Math.min(1, 2, 3));