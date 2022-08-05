const shoppingCart = {
    mat: 2,
    pen: 23,
    books: 5,
    fan: 1,
};

const keys = Object.keys(shoppingCart);
//console.log(keys);
const values = Object.values(shoppingCart);
//console.log(values);


/* this is the one one way to loop over a object but not very efficient */

for (i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    //console.log(propertyName, propertyValue)
}


/* easy way to do the loop on an object  */

for (var property in shoppingCart) {
    const value = shoppingCart[property]
    console.log(property, value);
}


