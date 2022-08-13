const numbers = [12, 45, 67, 78, 89];
//previous method

/* for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
} */

//Modern Method

/* for (const number of numbers) {
    console.log(number);
} */

const products = [
    { id: 1, name: 'iphone', price: 80000 },
    { id: 1, name: 'Xiaomi Phone', price: 80000 },
    { id: 1, name: 'laptop', price: 80000 },
    { id: 1, name: 'nokia phone', price: 80000 },
    { id: 1, name: 'ipad', price: 80000 },
    { id: 1, name: 'Nothing Phone', price: 80000 },
    { id: 1, name: 'Mac', price: 80000 },
]


function matchedProducts(products, search) {
    const mathced = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            mathced.push(product);
        }
    }
    return mathced;
}

const result = matchedProducts(products, 'Phone');
console.log(result);


