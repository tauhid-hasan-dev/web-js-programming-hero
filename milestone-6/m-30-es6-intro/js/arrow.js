//this is a great country and some of coutry 
function myFunc() {

}

//this is function expression
const functionExpression = function myFunc() {
}

//this is a function expression with anonymus function 
const functionExpressionAnonymus = function () {
}

/* ====================== Arrow Function ================== */


const arrrowFunction = (a, b) => {
    return a + b
}

//console.log(arrrowFunction(5, 6));



let personTwo = {
    age: 28,
    greet4: function () {
        console.log('Greet 1 ', this.age);
        console.log('Greet 1', this);
        function greet5() {
            console.log('Greet 2', this.age); // now this refer to the personTwo object and age will be 28 in the output 
            console.log('Greet 2', this);// this here is the personTwo
        }
        greet5();
    }
};

personTwo.greet4();





