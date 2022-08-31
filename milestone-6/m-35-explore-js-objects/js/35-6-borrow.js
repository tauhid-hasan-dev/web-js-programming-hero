//we can use method of a object to another object.

const tauhid = {
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
        /* this.exam(); */
        return `${this.name} is taking improvement exam on ${subject}`
    },
    //we can set value to the property  
    treatDay: function (amount, tips = 0) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const result = tauhid.exam();
console.log(result);

const muaz = {
    name: 'muaz hasan',
    money: 8000
}

const result2 = tauhid.exam.call(muaz) //calling the method of the tauhid object and using it for another object 
console.log(result2)

//call() method : 1st parameter will be the targeted object(this), and the next parameters will be in (,) comma.

const treatMoney = tauhid.treatDay.call(muaz, 500, 100);
console.log(treatMoney);

const improvement = tauhid.improveExam.call(muaz, 'arabic')
console.log(improvement);

//apply() method : 1st parameter will be the targeted object(this), and the next parameters will be in an array
const result3 = tauhid.exam.apply(muaz)
console.log(result3);

const muazInprovement = tauhid.improveExam.apply(muaz, ['bangla'])
console.log(muazInprovement);

const treat = tauhid.treatDay.apply(muaz, [200, 50]);
console.log(treat);

//bind() method: we will use one parameter the target object(this). we can call the function next time with variable.

const treatDay = tauhid.treatDay.bind(muaz); //one parameter (object will be refered by this)
const remaining = treatDay(3000, 600); // now we can pass the arguments 
console.log(remaining);
