//=================their is 3 main way to add event handler======================// 

/* ====================1- directly in the html Element==================*/
//<button onclick="console.log('Clicked ')"> Click me</button> (in html file)*/

/*===== add onclick function on the html element=====*/ //(IMPORTANT)
//<button onclick="makeRed()"> Click me</button> (in html file) 

//3- by adding a onclick property from js file like below
const purpleButton = document.getElementById('blue');
purpleButton.onclick = makeBlue; //be carefull dont call this function here 

function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

function makeRed() {
    document.body.style.backgroundColor = "red";
}

/*4 - add a eventlistener to js file*/ //(IMPORTANT)

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', () => {
    document.body.style.backgroundColor = "pink";
});


//update input value using addEventListener

let headerText = document.getElementById('text');
console.log(headerText)
const updateButton = document.getElementById('btn-update');
updateButton.addEventListener('click', () => {
    const inputText = document.getElementById('input');
    const inputValue = inputText.value;
    headerText.innerText = inputValue;
    inputText.value = ''; //ekhane evabei likhte hobe inputValue variable ekhane kaj korena
})

