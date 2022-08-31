//========There are five ways to create a object========//

/*------------ 1st- object literals(most used way to create to a object)-----------  */

//object can have property (when property has any value except function)
//object can have method (when property value is a function that property is a method for object)

const object = {};
//object property
object.name = 'tauhid'
object.surname = 'hasan'
//object methods
object.age = function () {
    console.log('My age is more than my younger brother');
}

console.log(object);
console.log(object.age());

/*------------ 2nd- object constructor (we will not use very often)-----------  */

const person = new Object();
console.log(person);

/*------------ 3rd- Object create method -----------  */

//const item = Object.create(null);
const item = Object.create(object);
//object is a prototype of item object 
//item object is a empty object but it can access the property from the object prototype.
console.log(item); //output will be empty array 
console.log(item.name);//output will be tauhid


/*---------------4th - Class (es6 class- it uses function inside it) --------------- */

class Person { //class does not need assign to a equal sign like object
    name = 'abul';
    address = 'sodor ghat'
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(56)
console.log(person1);


/*---------------5th-Class(onek puraton way) --------------- */

function Car(model, price) {
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon', 32);
console.log(tesla);


