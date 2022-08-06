//write a function which will convert miles to kilometers.

function mileToKm(mile) {
    const kilometer = mile * 1.609344;
    return +kilometer.toFixed(2);
}

const kilometer = mileToKm(36);
console.log(kilometer);