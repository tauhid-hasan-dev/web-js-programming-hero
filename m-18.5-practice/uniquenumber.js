var numbers = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9];

var arrayEmpty = [];

for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (arrayEmpty.indexOf(number) >= 0) {//
    } else {
        arrayEmpty.push(number);
    }
}
console.log(arrayEmpty);