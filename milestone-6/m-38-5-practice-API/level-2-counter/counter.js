const btnAdd = document.getElementById('btn-increase');
let countElem = document.getElementById('counter');

btnAdd.addEventListener('click', ()=>{
    let countelemvalue = countElem.innerText;
    let counterValueNumber = parseInt(countelemvalue);
    countElem.innerText = ++counterValueNumber; 
    localStorage.setItem('The Count:', countElem.innerText )
})

const getItemsFromLocalStorage = () =>{
    const storedValue = localStorage.getItem('The Count:')
    countElem.innerText = storedValue;
}
getItemsFromLocalStorage()




