/* 4) Write a function called odd_even() which takes an integer value and tells whether this  value is even or odd. You need to do it in 4 ways:  
● Has return + Has parameter 
● No return + Has parameter  */


/* ● Has return + Has parameter */

function odd_even(input) {
    if (input % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

var oddOrEven = odd_even(3);
// console.log(oddOrEven); 



/* ● No return + Has parameter */

function odd_even2(input) {
    if (input % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

var oddOrEven2 = odd_even2(3);





