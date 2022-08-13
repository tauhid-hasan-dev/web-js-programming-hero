//where to add
const targetElement = document.getElementById('cities');

//what to be added
const toBeAppended = document.createElement('li');
toBeAppended.innerText = 'Rajshahi';

//add the child to the parent;
targetElement.appendChild(toBeAppended);


/*===== adding a section to the main ========*/

//where to add
const mainSection = document.getElementById('main-section')

//what to add 
const childSection = document.createElement('section');
childSection.style.color = 'blue'

//creating h1 element
const headerTitle = document.createElement('h1');
headerTitle.innerText = 'Departements';

//appending h1 element to section
childSection.appendChild(headerTitle);

//creating ul element 
const subChild = document.createElement('ul');

//appending ul element to section
childSection.appendChild(subChild);

//creating 3 li elements
const subChildOfChild = document.createElement('li');
subChildOfChild.innerText = 'Math';

const subChildOfChild2 = document.createElement('li');
subChildOfChild2.innerText = 'Chemistry';

const subChildOfChild3 = document.createElement('li');
subChildOfChild3.innerText = 'Physics';

//appending li elements to the ul element
subChild.appendChild(subChildOfChild);

subChild.appendChild(subChildOfChild2);

subChild.appendChild(subChildOfChild3);


//finally appending the brand new section to the main
mainSection.appendChild(childSection);


// set innerHTML directly

const sectionDress = document.createElement('section');
console.log(sectionDress);
sectionDress.innerHTML = `
<h1>My Dress </h1>
<ul>
    <li>Panjabi </li>
    <li>Shirt </li>
    <li>pant </li>
</ul>
`

mainSection.appendChild(sectionDress);



