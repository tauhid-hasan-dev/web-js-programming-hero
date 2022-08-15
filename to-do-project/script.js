const btnAdd = document.getElementById('btn-add');
const input = document.getElementById('input-text');
const container = document.getElementById('container-id');
let count = 0;

btnAdd.addEventListener('click', () => {
    count++
    let inputValue = input.value;
    if (inputValue.length <= 0) {
        const error = document.getElementById('error-message');
        error.style.display = 'block'
    } else {
        const error = document.getElementById('error-message');
        error.style.display = 'none'
        //creating new element
        const addTodo = document.createElement('div')
        addTodo.classList.add('added-item');
        addTodo.innerHTML = `
        <div>${count}</div>
        <p class='paragraph'>${inputValue}</p>
        <i class="fa-solid fa-pen edit"></i>
        <i class="fa-solid fa-check done"></i>
        <i class="fa fa-times delete" id="delete" aria-hidden="true"></i>
        `;
        //append to parent element
        container.appendChild(addTodo);
        input.value = '';
        //delete the parent element(todo list item)
        const btnDelete = document.getElementsByClassName('delete');
        //edit button
        const btnEdit = document.getElementsByClassName('edit');
        //done button to confirm edit process
        const btnDone = document.getElementsByClassName('done');
        //selected button delete with getElementByClassName because we need to loop over it and delete the parent item
        for (let btn of btnDelete) {
            btn.addEventListener('click', (e) => {
                e.target.parentNode.remove();
            })
        }
        for (let btn of btnEdit) {
            btn.addEventListener('click', (e) => {
                const paragraph = e.target.parentNode.childNodes[3];
                paragraph.contentEditable = true;
                paragraph.style.backgroundColor = 'white';
                paragraph.focus();
                const done = e.target.parentNode.childNodes[7];
                done.style.color = '#22CB5C'
                done.style.fontSize = '30px';
            })
        }
        for (let btn of btnDone) {
            btn.addEventListener('click', (e) => {
                const paragraph = e.target.parentNode.childNodes[3];
                paragraph.contentEditable = false;
                paragraph.style.backgroundColor = 'rgb(225, 255, 245)';
                const done = e.target.parentNode.childNodes[7];
                done.style.color = 'black'
                done.style.fontSize = '20px';
            })
        }
    }
})








