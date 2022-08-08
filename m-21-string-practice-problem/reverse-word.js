//write a function to reverse words in a sentence
function reverseWord(str) {
    const words = str.split(' ');
    const reversed = [];
    for (i = words.length - 1; i >= 0; i--) {
        const index = i;
        const element = words[index];
        reversed.push(element);
    }
    return reversed;
}


const myStr = "Fasting is equal to year this day"
const result = reverseWord(myStr);
console.log(result);