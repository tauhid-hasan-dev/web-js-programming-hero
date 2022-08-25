const obj = {
    name: 'tauhid',
    age: 26,
    degree: {
        school: 'anadolu university',
        year: '2018-2022',
        level: 'undergraduate'
    }
}

//accessing property from a object by dot notation
console.log(obj.degree.year);

//accessing property from a object by bracket notation
console.log(obj['degree']['year']);
console.log(obj['degree']['level']);

//bracket notation is usefull if we want to use a property from a variable
const level = 'year' //property unknownly declared in a variable 
const levelOfEducation = obj.degree[level]  //we need to check this property by bracket notation. NOTE:we cant acces this property by using dot notation
console.log(levelOfEducation);

/* 
we can not access a property by dot notation 

1- if property name starts with Number (123name)
2- if property name has a space  or dash between them  (name-use)

but we can access all type of property by bracket notation 
*/
