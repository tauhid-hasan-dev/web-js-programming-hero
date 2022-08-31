//window is the 'global execution context' of javascript
//this refers to window object when the left side of this is empty
//this refers to the object of its left side before dot (obj.this)

const tauhid = {
    name: 'Tauhid hasan',
    money: 5000,
    study: 'Math',
    subjects: ['algebra', 'calculus', 'geometry' ],
    //this refer to the tauhid object inside a regular function.
    exam: function () {
        console.log(this);
    },
    //this refer to the window object inside a arrow function.
    improveExam: () => {
        console.log(this);
    },

}
//console.log(tauhid.exam());
//console.log(tauhid.improveExam());

//when we call a function by onclck inside the function this will refer to the window object
function thisTest() {
    console.log('event handler', this);
}


//but when we select a button from a dom and add a event listener to it 'this' keyword will refer to the selected button.

//when this will be logged into a arrow function- "this" will refer to window object

document.getElementById('this-test').addEventListener('click', (event) => {
    console.log('event listener', event.target);  //we can find selected element here 
    console.log(this);  // this will refer to window object here
})

//if we write event listener with normal function "this" will refer to the element;
document.getElementById('this-test').addEventListener('click', function () {
    console.log('event listener with normal function', this); //"this" here is window object 
})
