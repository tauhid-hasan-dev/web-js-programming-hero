/* 
---------------PRIMITIVE DATA TYPE(number, string , boolean)------------------

variable in the outer scope(global scope) will not change the value:  if it is passed as a funtion parameter and reassigned inside the function */

let num1 = 4;
let num2 = 5;

function add(a, b){
    a = 69;
    const result = a + b;
    return result;
}
console.log(num1);//output will be 4
const addResult = add(num1, num2);
//console.log(addResult);
console.log(num1); //output will be 4 

/* 
---------------NON-PRIMITIVE DATA TYPE(object , array)------------------

variable in the outer scope(global scope) will change the value:  if it is passed as a funtion parameter and change any property or element from the object or array . Beacause object and array */

let student1 = {name: 'tauhid',  age: 35}
let student2 = {name: 'muaz', age:4}

function students(a , b){
      a.name = 'mehedi';
      b.age = 25;
}
console.log(student1, student2); 
students(student1, student2);
console.log(student1, student2); 


