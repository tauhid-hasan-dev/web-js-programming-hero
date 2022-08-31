// normally we use for of loop to loop on array
//and we use for in loop to loop on object
const bottle = {
    color: 'red',
    price: 50,
    isCleand: true,
    capacity: 1
}

//for in loop to iterate on a object
for (const key in bottle) {
    const value = bottle[key]
    console.log(key, value);
}

//advanced
const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of pair) { //[key , value] is a result of destructuring
    console.log(key, value);
}