const btnAdd = document.getElementById('btn-increase');
let countElem = document.getElementById('counter');
const storedValue = localStorage.getItem('The Count:')
if(storedValue){
    btnAdd.addEventListener('click', ()=>{
        let countelemvalue = countElem.innerText;
        let counterValueNumber = parseInt(countelemvalue);
        countElem.innerText = ++counterValueNumber; 
        localStorage.setItem('The Count:', countElem.innerText )
    })
}else{
    localStorage.setItem('The Count:', 0)
}

const getItemsFromLocalStorage = () =>{
    const storedValue = localStorage.getItem('The Count:')
    countElem.innerText = storedValue;
}
getItemsFromLocalStorage()




