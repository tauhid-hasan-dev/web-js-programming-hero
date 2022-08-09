//write a function which will remove the duplicates from an array

function removeDuplicate(inputArr) {
    let uniqueArr = [];
    for (i = 0; i < inputArr.length; i++) {
        const name = inputArr[i];
        if (uniqueArr.includes(name) === false) {
            uniqueArr.push(name);
        }
    }
    return uniqueArr
}

const names = ['abdullah', 'hasan', 'hasan', 'mehedi', 'mehedi', 'juel', 'juel', 'mert', 'akash'];
const result = removeDuplicate(names);
console.log(result);



