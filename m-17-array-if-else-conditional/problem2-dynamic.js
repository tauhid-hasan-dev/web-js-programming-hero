let me = 85;
let tom = 66;
let jane = 95;
let peter = 56;
let john = 40;

let results = [me, tom, jane, peter, john];

results.forEach(item => {
    if (item >= 90) {
        console.log(" A grade")
    } else if (item >= 80) {
        console.log(" B grade")
    } else if (item >= 60) {
        console.log(" C grade")
    } else if (item >= 50) {
        console.log(" D grade")
    } else {
        console.log('failed')
    }
});

