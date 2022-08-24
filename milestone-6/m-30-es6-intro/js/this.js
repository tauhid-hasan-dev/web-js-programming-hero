//this is a window object

//console.log(this)

//this refers to the object that is currently calling the function.

/* ================ SENARIO ONE: this keyword refers to the window object ============== */

//var age = 34;
function displayAge() {
    console.log(this.age);
    console.log(this);
}

//window.displayAge(); //this refers to the window object

console.log('------------------');

/* ================ SENARIO TWO: this refers to the very left object(ekdom bam pasher sather object) ============== */

let personOne = {
    age: 45,
    displayAge: displayAge,
    nestedPerson: {
        age: 60,
        displayAge: displayAge,
    }

};

personOne.displayAge(); //here this refers to the person object

/* ================ SENARIO THREE: this refers to the very left object (function revoked or called as a property of nested object)  ============== */
personOne.nestedPerson.displayAge(); //here this refers to the nested person object.


/*================= SENARIO FOUR: this will not work for arrow function ==================== */
/* var age = 36; */
function greet2() {
    console.log('Greet 2', this.age); //output will be undefined(if no variable in not defined in global scope) because this refers to the window object.
    console.log('Greet 2', this); // this will be the window object.
}




let person = {
    age: 28,
    greet1: function () {
        console.log('Greet 1 ', this.age);
        console.log('Greet 1', this);
        function greet2() {
            console.log('Greet 2', this.age); //output will be undefined(if no variable in not defined in global scope) because this refers to the window object.
            console.log('Greet 2', this); // this will be the window object.
        }
        greet2();
    },

};

//person.greet1();

/*==== if we change the greet 2 function into arrow function it will this will refer to its parent object==== */


let personTwo = {
    age: 28,
    greet1: function () {
        console.log('Greet 1 ', this.age);
        console.log('Greet 1', this);
        const greet2 = () => {
            console.log('Greet 2', this.age); // now this refer to the personTwo object and age will be 28 in the output 
            console.log('Greet 2', this);// this here is the personTwo
        }
        greet2();
    }
};

//personTwo.greet1();


var age = 36;

const greet2 = () => {
    console.log('Greet Global', this.age); // now this refer to the age variable defined in the window object (age 36 will be the output )
    console.log('Greet Global', this);// this here is the window object
}
greet2();


