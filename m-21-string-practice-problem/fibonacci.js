//find the fibonacci numbers
// you need to declare a variable array with at least two element in it and thus it can start the counting 
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

const fibo = [0, 1];
for (i = 2; i <= 15; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}
console.log(fibo);