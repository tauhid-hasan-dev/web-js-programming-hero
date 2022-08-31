//kono object er method er vitor theke sei object er kono property paite chaile 'this' keword use korte hobe

//we can return value or variable from the function used in method

const student = {
    name: 'Tauhid hasan',
    money: 5000,
    study: 'Math',
    subjects: ['algebra', 'calculus', 'geometry'],
    //exam is a method of student object
    exam: function () {
        return (`${this.name} is a servant of Allah`);
    },
    //we can call a method inside a method
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    //we can set value to the property  
    treatDay: function (amount, tips = 0) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const output = student.exam();
//console.log(output);
const value = student.improveExam('algebra')
//console.log(value);
const leftMoney = student.treatDay(500, 500);
console.log(leftMoney);
const dola = student.treatDay(500)
console.log(dola);
