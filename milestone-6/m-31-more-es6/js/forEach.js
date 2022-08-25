//forEach() is the same as map but foEach does not return anything;
//map and array will not modify the original array

const persons = [
    { name: 'hasan', age: 25, height: '167cm', weight: '72kg' },
    { name: 'kamal', age: 25, height: '170cm', weight: '72kg' },
    { name: 'rashed', age: 85, height: '185cm', weight: '72kg' },
    { name: 'ajmal', age: 67, height: '190cm', weight: '72kg' },
]

persons.forEach(person => console.log(person)) //we can not get a value from a forEach method. that why we cant keep this line in a function like map.