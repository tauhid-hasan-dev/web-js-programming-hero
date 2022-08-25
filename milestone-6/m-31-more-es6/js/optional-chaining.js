const obj = {
    name: 'tauhid',
    age: 26,
    degree: {
        school: 'anadolu university',
        year: '2018-2022',
        level: 'undergraduate'
    }
}

//console.log(obj.degree.year);
//console.log(obj.degre.year);//output will be - can not read properties of undefined
console.log(obj.degre?.year); //this is called optional chaining (output will be undefined)

/* 
Optionnal chaining means - even if their is no value of degre the code execution will go to the year property and check if it is a property of the obj object */