//write a function which will reverse any string 

function reverseString(str) {

    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        const element = str[i]
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const myStr = "Today is Ashura, Fasting today"
const result = reverseString(myStr);
console.log(result);