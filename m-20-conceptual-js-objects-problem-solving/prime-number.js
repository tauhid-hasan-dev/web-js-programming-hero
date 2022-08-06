function primeNumber(num) {
    if (num % num === 1 && num % 1 === num) {
        return `${num} is a prime number`;
    } else {
        return `${num} is a not a prime number`;
    }
}

const result = primeNumber(4);
console.log(result);