function minInArray(inputArr) {
    let lowest = inputArr[0];
    for (i = 0; i < inputArr.length; i++) {
        const index = i;
        const result = inputArr[index];
        if (lowest > result) {
            lowest = result;
        }
    }
    return lowest;

}
const numbers = [12, 14, 15, 213, 456, 312];
const min = minInArray(numbers);
console.log(min);