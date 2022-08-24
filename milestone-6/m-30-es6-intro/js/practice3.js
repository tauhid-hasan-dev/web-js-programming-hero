/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */

const arrNumbers = [3, 4, 3, 5, 6]


const squareAverage = (arr) => {
    const squareArr = []
    for (let elem of arr) {
        const squareElem = Math.pow(elem, 2)
        squareArr.push(squareElem);
    }
    console.log(squareArr);
    let sumOfSquareArr = squareArr[0];
    for (let number of squareArr) {
        sumOfSquareArr = sumOfSquareArr + number;
    }
    console.log(sumOfSquareArr);
    const averageOfSquareArr = sumOfSquareArr / squareArr.length;
    return averageOfSquareArr;
}

const result = squareAverage(arrNumbers);
console.log(result);