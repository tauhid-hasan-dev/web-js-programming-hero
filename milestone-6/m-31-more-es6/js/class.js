//class is a template to create object
//Class er maddhome amra eki rokomer bivinno object create korte pari
//First letter of class name is Capital letter
//Class does not exept parameter but it accepts parameter by constructor function in it 
//constructor take dynamic parameters from outside and help to create a different object
//when we call the class we must use 'new' keyword
//in the constructor function "this" should be used to assign property value.

class Instructor {
    name;
    designation = 'web course instructor';
    team = 'programming hero';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create a quiz for module ${module}`);
    }
}

const aamir = new Instructor('aamir', 'dhaka');
console.log(aamir);
//aamir.startSupportSession('9.00');
//aamir.createQuiz(60)

const solaiman = new Instructor('solaiman', 'bandorban');
console.log(solaiman);