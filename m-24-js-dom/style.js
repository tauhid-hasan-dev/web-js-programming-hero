console.log('first');
const title = document.querySelector('header h1');
title.style.textAlign = 'center'
const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid red';
    section.style.borderRadius = '15px'
    section.style.padding = '30px'
    section.style.marginBottom = '15px'
    section.style.backgroundColor = 'lightCyan'
}

const addClass = document.getElementById('add-class');
addClass.classList.add('text-color')

console.log(addClass.childNodes[0].nextSibling)  
