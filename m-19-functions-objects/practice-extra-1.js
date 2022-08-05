/* একটা ফাংশন লিখবা যেটা ১৩ এর নামতা(multiplication table) আউটপুট হিসেবে দেখাবে।  */

//has no return

function namtaTero(input) {
    for (i = 1; i <= 10; i++) {
        const result = i * input;
        console.log(`${input}*${i} = ${result}`)
    }
}

var namta = namtaTero(13);

//has return

function namtaTero(input) {
    var table = "the";
    for (i = 1; i <= 10; i++) {
        var result = i * input;
        table += input + " X " + i + " = " + result + "\n";
    }
    return table;
}

var namta = namtaTero(15);
console.log(namta);
