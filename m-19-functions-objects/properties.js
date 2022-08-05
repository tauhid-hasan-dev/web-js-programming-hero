/* Object is mutable in javscript */

const shoppingCart = {
    mat: 2,
    pen: 23,
    books: 5,
    fan: 1,
}

/* use Object.keys(obejcet name) to get all the property of a object as an array */

const getAllProperty = Object.keys(shoppingCart);
//console.log(getAllProperty);

/* use Object.values(obejcet name) to get all the values of the properties of a object as an array */
const getAllValues = Object.values(shoppingCart);
//console.log(getAllValues);


/* there is 3 ways to get property values from an object  */

const matValue = shoppingCart.mat;
//console.log(mats)

const penValue = shoppingCart['pen'];
//console.log(pens);

const propertyName = "mat"
const propertyValue = shoppingCart[propertyName];

/* there is 3 ways to get property values from an object  */
console.log(shoppingCart);

shoppingCart.mat = 112;
console.log(shoppingCart);

shoppingCart['mat'] = 200;
console.log(shoppingCart);

shoppingCart[propertyName] = 199523;
console.log(shoppingCart);





