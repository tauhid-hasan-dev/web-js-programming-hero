//find the cheapest phone from an array of object value.

const phones = [
    { name: 'Apple', price: 80000, memory: '256gb' },
    { name: 'Xiaomi', price: 20000, memory: '128gb' },
    { name: 'Samsung', price: 40000, memory: '64gb' },
    { name: 'Oppo', price: 25000, memory: '128gb' },
    { name: 'Nothing', price: 45000, memory: '128gb' },
    { name: 'Nokia', price: 18000, memory: '64gb' },
]

function cheapestPhone(inputArr) {
    let cheapest = inputArr[0];
    for (let i = 0; i < inputArr.length; i++) {
        const phone = inputArr[i];
        if (cheapest.price > phone.price) {
            cheapest = phone;
        }
    }
    return cheapest;

}

const result = cheapestPhone(phones);
console.log(result);

