//we can store common field(property) and common methods to another class
//and we can inherite properties or field from that class by extending it to the target class
//inside the target class we need to use super() method to call the constructor function(methos)
//this is how we can generate dynamic objects.


class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    giveFeed() {
        console.log(`${this.name} thank you for your feedback`);
    }

}


class Instructor extends TeamMember {
    designation = 'web course instructor';
    team = 'programming hero';
    constructor(name, location) {
        super(name, location) //super() is for call the parent constructor
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create a quiz for module ${module}`);
    }
}

//developers team 

class Developers extends TeamMember {

    designation = 'Developer';
    team = 'programming hero';

    constructor(name, location, tech) {
        super(name, location)//super() is for call the parent constructor
        this.tech = tech;
    }
    developeFeature(feature) {
        console.log(`Please develop the ${feature}`);
    }
    release(version) {
        console.log(`please create a quiz for module ${version}`);
    }

}


class JobPlacement extends TeamMember {

    designation = 'job placement commandos';
    team = 'programming hero';
    aria;
    constructor(name, location, aria) {
        super(name, location);//super() is for call the parent constructor
        this.aria = aria;
    }
    provideResume(country) {
        console.log(`${this.name} Please provide the resume to the ${this.location}, ${country}`);
    }
    studentCare(version) {
        console.log(`please create a quiz for module ${version}`);
    }

}

const hasan = new JobPlacement('Hasan', 'Istanbul', 'Europe');
console.log(hasan);
hasan.provideResume('Europe');

const muaz = new Developers('muaz', 'Dhaka', 'Javascript');
console.log(muaz);