/* There are 8 ways to get undefined 
1- when variable declared but not assigned(or not initialized)
2- function with no return will be undefined
3- parameter that is not passed will be undefined;
4- if return has nothing on the right side of it will be undefind
5- property that does not exists on an object will be undefind
6- element that does not exists in an array will be undefind
7- if we delete any element from an array and try to find it, it will be undefind(dont do this use slice method);
8- set a value derectly to undefined (not recommended instead of using undefined we can use null)

*/
//1- when variable declared but not assigned or not initialized
let a;
console.log('varaible is not initialized',a);


//2- function with no return will be undefined
function add (a, b){
    const total = a+b ;
}

const result = add();
console.log('function with no return', result);

//3- parameter that is not passed will be undefined;
function parameterNotPassed (a, b, c){
    const result = a+b+c;
    console.log(a, b, c); //c will be undefined
}
parameterNotPassed(1, 2) 

//4- if return has nothing on the right side of it will be undefind
function returnHasNothing (a , b){
    if(a <0 || b<0){
        return;
    }
    return a+b;
}
const addresult = returnHasNothing(2, -5);
console.log('return has nothing on the right side',addresult);



//5- property that does not exists on an object will be undefind
const obj = {age: 23, country : 'bangladesh', height: '171cm'}
console.log(obj.age, obj.name);



//6- element that does not exists in an array will be undefind
const numebrs = [12, 34, 56, 67];
console.log(numebrs[0], numebrs[200], numebrs[500])

//7- if we delete any element from an array and try to find it, it will be undefind;
const arr = [12, 45, 67, 788]
//you should not do it instead of you should use splice method
delete arr[1];
console.log(arr[1]);

//when we explicitly assign a undfind value to a variable(not recommended use null instead of)
const num = undefined;
console.log('undefind as value', num); 
const num2 = null;
console.log('null as value', num2); 






