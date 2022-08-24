/* 1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */

const arrowFunction = (num1, num2, num3) => {
    const multiply = num1 * num2 * num3;
    return multiply;
}

const multiplication = arrowFunction(10, 20, 30);
console.log(multiplication);

/* 2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */

const templateString =
    `I am a web developer.
I love to code.
I love to eat biryani. `
console.log(templateString);

/* Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

const defaultParameters = (num1, num2 = 5) => {
    return num1 + num2;
};

const add = defaultParameters(1);
console.log(add);