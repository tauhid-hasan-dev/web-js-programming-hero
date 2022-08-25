/* 1) Challenging Follow below array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method. */

const peoples = [
    { name: 'tauhid', age: 20 },
    { name: 'Muaz', age: 15 },
    { name: 'Sabiha', age: 22 },
];

/* with for loop */
let sumOfAges = 0;
for (let people of peoples) {
    sumOfAges = sumOfAges + people.age;
}

//console.log(sumOfAges);

/* with reduce method */
const reduced = peoples.reduce((previous, current) => {
    //console.log(previous, current);
    const sumof = previous + current.age;
    return sumof;
}, 0)

console.log(reduced);

