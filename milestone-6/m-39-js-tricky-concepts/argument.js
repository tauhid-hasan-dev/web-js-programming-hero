//parameter: passed in the function body 
//argument: passed when function called 
     /* 1- "agruments"can only be accessed inside the function
        2- its a array like object (we cant find element from it by index but we cant do map() on it )
        3- we can convert it to an array by spread operator.(now we can use map to iterate on each element of that array)
     */
//we can use length for a function to find how many parameters is passed.

function arguments (a, b, c, d){ //parameters
    const argument = [...arguments] //this is how we can convert the argument object to an array.
    argument.map(elem =>{ 
        const result = elem + 1;
        console.log(result);
    })
    //console.log(argument);
    const result = a + b +c+ d;
    return result;
}
const total = arguments(25, 45, 67, 78, 67, 89, 90);//arguments
console.log(total);
console.log(arguments.length);//we can use length for a function to find how many parameters is passed.