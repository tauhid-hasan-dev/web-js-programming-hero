/* to find any word or letter of any combination match we have to follow 3 steps to ingnore letter cases.
   1- convert the the target string to lower case.
   2- convert the search string to lower case.
   3. then apply the includ method to the lower cased target string

   include method give the output as true or false
*/

const myLife = "My name is tauhid hasan and my country is bangladesh and I live in Istanbul at this moment"

const searchString = "nothing";

const myLifeLoweCase = myLife.toLowerCase();  //1- convert the the target string to lower case.

const searchStringLowerCase = searchString.toLowerCase();// 2- convert the search string to lower case.

const doesExist = myLifeLoweCase.includes(searchStringLowerCase);//3. then apply the includ method to the lower cased target string.

//console.log(doesExist);

//===================indexOf(string)==================//

console.log(myLife.indexOf('name')); // out asbe name er first letter n er index.
console.log(myLife.indexOf('names')); // output asbe -1 karon names string er vitor nai.

if (myLife.indexOf('names') >= 0) {
    console.log('exists inside the string');
} else {
    console.log("can not find it");
}



//===================starts with(string)==================//

console.log(myLife.startsWith('My')); // true
console.log(myLife.startsWith('This')); //false

//===================ends With(string)==================//

console.log(myLife.endsWith('moment')); // true
console.log(myLife.endsWith('end'));//false

//normally pdf file ba png file i mean to find any type of file we can use endwith method of string