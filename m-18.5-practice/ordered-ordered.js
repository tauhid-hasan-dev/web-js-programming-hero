/*============ put the numbers in serial: write program =============*/

var numbers = [1, 3, 4, 15, 13, 7, 18, 9, 20, 11, 12, 6, 2, 5, 16, 17, 8, 19, 10, 8];


for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    for (var j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            var temp = numbers[i];
            numbers[i] = numbers[j]
            numbers[j] = temp;
        }
    }

}
console.log(numbers);

