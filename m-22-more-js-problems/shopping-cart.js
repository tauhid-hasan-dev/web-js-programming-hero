const phones = [
    { name: 'Apple', price: 10, memory: '256gb', quantity: 5 },
    { name: 'Xiaomi', price: 22, memory: '128gb', quantity: 2 },
    { name: 'Samsung', price: 40, memory: '64gb', quantity: 3 },
    { name: 'Oppo', price: 20, memory: '128gb', quantity: 5 },
    { name: 'Nothing', price: 50, memory: '128gb', quantity: 5 },
    { name: 'Nokia', price: 21, memory: '64gb', quantity: 6 },
]

function totalPrice(inputArr) {
    let sum = 0;
    for (let i = 0; i < inputArr.length; i++) {
        const phone = inputArr[i];
        const productTotal = phone.price * phone.quantity;
        sum = sum + productTotal;
    }
    return sum
}

const result = totalPrice(phones);
console.log(result);