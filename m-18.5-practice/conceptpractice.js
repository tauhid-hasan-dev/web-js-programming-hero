/* ===============finding the biggest string in an array============ */

var vaibon = ['tauhid', 'shofiqul', 'arif', 'muazhasan'];

var boro = vaibon[0];

for (i = 0; i < vaibon.length; i++) {
    var sontan = vaibon[i];
    if (sontan.length > boro.length) {
        boro = sontan;
    }
}

//console.log(boro);

/*============ validating a input if it is even and odd number =============*/

var num = 71;

if (num % 2 === 0) {
    //console.log("even")
} else {
    //console.log("odd")
}

/*============ validating a input if it is leep year or not =============*/

var year = 2050;

if ((year % 4 === 0) && (year % 400 === 0) && (year % 100 !== 0)) {
    // console.log(year + " is a leep year")
} else {
    //console.log(year + " is not a leep year")
}

/*============ find the numbers between 1-50 which is can be divided by 3 and 5 =============*/

for (i = 0; i < 50; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        //console.log(i);
    }
}

/*============ find the unique numbers form the array below  (not solved)=============*/

var numbers = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9];

/* if (numbers.indexOf(2) >= 0) {
    console.log(numbers.indexOf(2))
} */

/* var unique = numbers[0]; */
var arrayEmpty = [];
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (arrayEmpty.indexOf(number) > 0) {
        return;
    } else {
        arrayEmpty.push(number);
    }
}
console.log(arrayEmpty);

/*============ find the large number form the array below =============*/

var numbers = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8];
var boro = numbers[0];
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > boro) {
        boro = number;
    }

}
/* console.log(boro); */









