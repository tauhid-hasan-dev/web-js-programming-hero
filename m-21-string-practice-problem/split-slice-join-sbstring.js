//================ split() =================//

const myLife = "My name is tauhid hasan. And my country is bangladesh. And I live in Istanbul at this moment"

const parts = myLife.split(' '); //space onujayi word and letter guloke niye ekta string korese

const sentences = myLife.split('.');// full stop onujayi sentence guloke alada korte pari 

const characters = myLife.split('');

console.log(parts);
console.log(sentences);
console.log(characters);

//================ slice() =================//

console.log(myLife.slice(5, 12)); //does not include the last index but it includes first index.


//================ sbstring() =================//
console.log(myLife.substring(5, 12));
