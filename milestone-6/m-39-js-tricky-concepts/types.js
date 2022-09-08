//some other programming language(strongly typed language) : 
/* we need to use explicitly the type of the variable.
int a = 5; */

/* ========== Javascript is a Dynamic Type Language =========== */

//but in javascript we can assign any type of value to a variable without mentioning the type of the variable 

/* primitive type value */
const a = 2; //number
const d = 'this a d value';//string
const isValid = true;//boolean

//console.log(typeof a); 
//console.log(typeof d);
//console.log(typeof isValid);


/*non-primitive (array and object)*/
const student = [25, 89, 56];
const car = {
    color: 'red',
    wheel : 4, 
    gps: true
}

//if we reassign for both of primitive and non primitive value will change just for the changed variable.
let x = 5;
let y = 6;
console.log(x, y);
y = 7;
console.log(x, y);

const carOne = {
    color: 'red',
    wheel : 4, 
    gps: true
}

carTwo = carOne;
//if we change any property of carTwo, carOne will take the same changes as well.
carTwo.color = 'green' 

//if we assign to carTwo object again, carOne will not be changes now reference logic will not work
carTwo = {glass : 2, radae: false};

console.log(carOne, carTwo);




