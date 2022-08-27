const objJavaScript = {
    name: 'tauhid',
    surname: 'hasan',
    age: 30,
    profession: ['architect', 'web developer'],
    location: 'Istanbul'
}

const objJSON = JSON.stringify(objJavaScript);  //it will convert a object into a string
const objJsAgain = JSON.parse(objJSON); // it will convert a string object to a js object
console.log(objJSON);
console.log(objJsAgain);