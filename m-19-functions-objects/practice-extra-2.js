/* ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে। */

function lowerCase(input) {
    var soto = input.toLowerCase();
    return soto;
}

var sotoHater = lowerCase("HELLO");
console.log(sotoHater)