function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments)
        //ai 'arguments' er vitore kintu barti argument gula chole asbe amra atake array er moto kore access korte pari.

        //kintu ata array na etake array like object bole 

        //'arguments' shudhu matro function er vitore accessible not outside
        /
        console.log(arguments[2]);
}

add(12, 34, 56, 77, 89);