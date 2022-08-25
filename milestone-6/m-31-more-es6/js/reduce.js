//reduce takes a call back function and a initial value 0(normally)
//call back function in a reduce function takes two parameter previous and current value


const arr = [12, 114, 12, 45, 67]

const reduceArray = arr.reduce((previous, current) => {
    return previous + current
}, 50);

console.log(reduceArray);