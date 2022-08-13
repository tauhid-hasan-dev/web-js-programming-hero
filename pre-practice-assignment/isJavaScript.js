//Problem:2  isJavaScriptFile 

function isJavaScriptFile(input) {
    let output = input.endsWith(".js");
    return output;
}

const file = isJavaScriptFile("me.js");
console.log(file);