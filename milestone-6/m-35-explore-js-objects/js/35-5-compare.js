//case first(compairing primitive value)- output will be 'they are same' because they are primitive value

const first = 2;
const second = 2;

if (first === second) {
    console.log('they are same');
} else {
    console.log('different');
}

//case second(comparing reference value object and array)-output will be 'different'.
//every object and array has different place in execution context

const firstObj = { a: 2 };
const secondObj = { a: 2 };

if (firstObj === secondObj) {
    console.log('they are same');
} else {
    console.log('different');
}

//if we assign a object value to another variable then the both has the same references in the execution context.
//output wil be they are same because they have the same reference

const firstObjRef = { a: 2 };
const secondObjRef = { a: 2 };
thirdObjRef = firstObjRef;

if (firstObjRef === thirdObjRef) {
    console.log('they are same');
} else {
    console.log('different');
}

//NOT recommended method to compare object 
/* step one - convert objects to String
step two - compare them
this is not the best method to compare */

//normally compare a object is a difficult task-(need some deeep checking)
// we will use library to compare it- or we wil take code from stack overflow
//(we will compare the length of the keys of two objects)
//its difficult to do it by own- dont waste time-just

const firstObject = { a: 2, b: 5, c: 6 }
const secondObject = { d: 3, b: 6, e: 2 }
function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
        return true;
    } else {
        return 'they are same';
    }
}

const isSame = compareObject(firstObject, secondObject);
console.log(isSame);





