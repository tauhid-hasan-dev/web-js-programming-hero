/* Adding name and deleting name from local storage  */

const btnAdd = document.getElementById('add-item');
btnAdd.addEventListener('click',()=>{
    const inputElem = document.getElementById('input-elem');
    const inputValue = inputElem.value;
    localStorage.setItem('name', inputValue);
})

const btnDelete = document.getElementById('delete-item');
btnDelete.addEventListener('click', ()=>{
    const inputElem = document.getElementById('input-elem');
    localStorage.removeItem('name');
})

/* Adding name and deleting name from local storage  */

const btnAddAge = document.getElementById('add-item-age');
btnAddAge.addEventListener('click',()=>{
    const inputElem = document.getElementById('input-elem-age');
    const inputValue = inputElem.value;
    localStorage.setItem('age', inputValue);
})

const btnDeleteAge = document.getElementById('delete-item-age');
btnDeleteAge.addEventListener('click', ()=>{
    const inputElem = document.getElementById('input-elem-age');
    localStorage.removeItem('age');
})

/* clear all from the local storage */

const btnClear = document.getElementById('clear-all');
btnClear.addEventListener('click', ()=>{
    localStorage.clear();
})