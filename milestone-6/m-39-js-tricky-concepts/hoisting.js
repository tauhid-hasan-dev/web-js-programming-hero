for(var i = 0; i <5 ; i++){
    console.log(i);
}

//amra var use korate akhane i er man bahireo chole gese. mane hosse var hosse hoisted in javascript 
console.log('outside', i); 

for(let j = 0; j < 5; j++){
    console.log(j);
}

//console.log(j); (j is not defind because let does not break the block scope and not hoisted)

add(); //we can access the function declaration add here.
//A functional declaration is hoisted but a function expression is not hoisted in javascript
function add(){
    console.log('add');
}

//but a function expression is not hoisted we can not access it before declaration. it works like a variable
add();
const addOne = function(){
    console.log('addone');
}




