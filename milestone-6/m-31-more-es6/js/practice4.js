
const tazin = { myName: 'tauhid', age: 20 };
//console.log(tazin.age); (directly with console)
//const age = tazin.age; (with a variable)
//console.log(age);

/* with destructuring */

const { age, myName } = tazin;
console.log(myName);
console.log(age);

