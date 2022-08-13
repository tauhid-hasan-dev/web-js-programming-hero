// recursion means a fucntion can be called inside itself 


function sum(i) {
    /* if (i === 1) {
        return 1;
    } */
    console.log(i)
    return i + sum(i - 1);
}

const result = sum(5);
console.log(result);

/* this how its works */

/*
   5 + sum(4)
   5 + 4 + sum(3)
   5 + 4 + 3 + sum(2)
   5 + 4 + 3 + 2 + sum(1)
   5 + 4 + 3 + 2 + 1   
*/

