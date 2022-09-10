//1. Syntax Error (most of time it will the show the error place
//2. Type Error ()


/* ----------------1-syntax error ----------------*/

//Const vallage = 'amar vallage'; //c is capital in const 



/* ----------------2 - Type Error ----------------*/
notes: 1- 

let address;
console.log(address);
//console.log(address.length); //Type error : cannt read property of undefined

const people = 5;
//people() //type error: people not a function


/*----------------- 3 - Reference Error----------------- */

function add(a, b){
    const result = a + b;
    return result;
}

//console.log(result);  //reference error

if(true){
    //console.log(time); //reference error
    const time = 11;
}