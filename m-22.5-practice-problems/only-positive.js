//৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।


const arr = [12, 13, 100, 15, 67, -12, 56, 78];

function onlyPositive(inputArr) {
    //declaring an empty array what will take tha positive numbers 
    const onlyPositiveNumbers = [];

    //loop over the array and find the posive numbers and pushing into the array avobe
    for (let i = 0; i < inputArr.length; i++) {
        const element = inputArr[i];
        if (element >= 0) {
            onlyPositiveNumbers.push(element);
        } else {
            break;
        }

    }

    return onlyPositiveNumbers;
}

const positiveNumber = onlyPositive(arr);
console.log(positiveNumber);