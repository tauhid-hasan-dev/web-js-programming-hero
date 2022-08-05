//finding largest number using if else;
var num1 = 13;
var num2 = 79;
var num3 = 45;
var largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num3 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3
}

console.log('The largest number is ' + largest);


