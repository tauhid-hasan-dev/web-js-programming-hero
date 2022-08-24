/* ============== object destructuring ==================  */

const { namea, age } = { namea: 'akash', surname: 'ahmad', age: 25 }

console.log(namea, age);

/* this is the logic of object destructuring 
-we can access the object properties by object destructuring .

NOTE: left side will be the obejct of properties name(exactly same name) = right side will be object itself or a variable which value is a object.

*/

const car = {
    namecar: 'audi',
    price: 250000,
    adress: 'germany',
    isAuto: true,
}

const { namecar, price, adress, isAuto } = car; //lefside is a object of properties of the target object = right side is the target object itself

console.log(namecar, price, isAuto);

/* ============== Array destructuring ==================  */

const arr = [23, 45, 67, 78, 89];

const [first, second, third] = arr;

console.log(first);
