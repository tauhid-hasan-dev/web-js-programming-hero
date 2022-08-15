const btnAdd = document.getElementById('btn-add');
const listContainer = document.getElementById('list-container')
const listItem = document.getElementsByClassName('item');

//event delegation to the parent of list items
listContainer.addEventListener('click', (e) => {
    e.target.parentNode.removeChild(e.target);
})

//event listner for delete items
btnAdd.addEventListener('click', () => {
    const newListItem = document.createElement('li');
    newListItem.innerText = 'This is a new list item';
    newListItem.classList.add('item');
    listContainer.appendChild(newListItem);
})







