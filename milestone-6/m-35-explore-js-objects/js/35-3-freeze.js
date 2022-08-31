/* summurry */
//Accessing all the keys of a object: Object.keys(obj) 
//Accessing all the value of the keys of a object : Object.values(obj)
//we can access key value pares by Object.entries(obj)
//deleting property from the object
//seal method : does not allow add or delete a property from object 
//seal method allows modify or edit existing property 
//

const bottle = {
    color: 'red',
    price: 50,
    isCleand: true,
    capacity: 1
}

//Accessing all the keys of a object: Object.keys(obj) 
const keys = Object.keys(bottle);
//console.log(keys);

//Accessing all the value of the keys of a object : Object.values(obj)
const values = Object.values(bottle);
//console.log(values);

//we can access key value pares by Object.entries(obj)
const keyValues = Object.entries(bottle);
console.log(keyValues);

//deleting property from the object
//console.log(bottle);
delete bottle.isCleand;
//console.log(bottle);

//seal method : does not allow add or delete a property from object 
//seal method allows modify or edit existing property 
Object.seal(bottle);
bottle.price = 20;
console.log(bottle);

Object.freeze(bottle)
//we can not edit , add , or delete a freezed object


