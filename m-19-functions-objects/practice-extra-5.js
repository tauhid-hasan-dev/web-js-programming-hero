/* pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :এবং pepperoni প্রিন্ট করবা। */

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}
pizza.toppings[2] = 'Alhamdulillah'
var print = pizza.toppings[2];
console.log(print);