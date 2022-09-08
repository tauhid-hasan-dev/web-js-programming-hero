/* 
=============== Truthy value in javascript ==================
- true
- any number (+ve or -ve) will be truthy
- any string other than empty string
- empty objcet {} and empty array []

*/

/* 
=============== Falsy value in javascript ====================
- false 
- 0
- '' (epmty string)
- undefind
- null

*/
/* You can check a value is truthy and falsy by writing simple function */
const x = false;
if(x){
   console.log('value of x i truthy');
}
else {
    console.log('value of x is falsy');
}

/* optional */


/* cheack falsy (with single bang)*/ 
let y = true;
if(!y){
    console.log('this value is falsy');
}else{
    console.log('true');
}

//cheack truthy (with double bang)
let z = true;
if(!!z){
    console.log('the value of z is truthy');
}else{
    console.log('false');
}
