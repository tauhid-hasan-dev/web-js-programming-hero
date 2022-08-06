//Write a function that will take a number as an input and check if it is positive or not.

function positiveOrNegetive(num) {
    if (num >= 0) {
        return 'positive'
    } else {
        return 'negetive'
    }
}

const result = positiveOrNegetive(0)
console.log(result);