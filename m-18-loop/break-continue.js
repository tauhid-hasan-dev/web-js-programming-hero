var numbers = [45, 67, 55, 87, 34, 88, 66, 78, 89, 89];

for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        break;
    }
    console.log(number);
}

console.log('=========continue=============');

for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 80) {
        continue;
    }
    console.log(number);
}