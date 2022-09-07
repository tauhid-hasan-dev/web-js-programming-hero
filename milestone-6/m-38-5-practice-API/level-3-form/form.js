const nameField  = document.getElementById('name-field')
const emailField = document.getElementById('email-field')
const messageField = document.getElementById('message-field')

const btnNameDelete = document.getElementById('btn-name-delete')
const btnNameAdd = document.getElementById('btn-name-add');
//add item to local storage
const addItem = ( property , propertyField) =>{
    const value = propertyField.value;
    localStorage.setItem(property, value);
}
//delete item from local storage
const deleteItem = ( property , propertyField) =>{
    const value = propertyField.value;
    localStorage.removeItem(property, value);
}

//adding and deleting name to the local storage
btnNameAdd.addEventListener('click',()=>{
    addItem('Name:', nameField);
})

btnNameDelete.addEventListener('click',()=>{
    deleteItem('Name:', nameField);
})

//adding and deleting email to the local storage
const btnEmailDelete = document.getElementById('btn-email-delete')
const btnEmailAdd = document.getElementById('btn-email-add');

btnEmailAdd.addEventListener('click',()=>{
    addItem('Email:', emailField);
})

btnEmailDelete.addEventListener('click',()=>{
    deleteItem('Email:', emailField);
})

const btnMessageDelete = document.getElementById('btn-message-delete')
const btnMessageAdd = document.getElementById('btn-message-add');

btnMessageAdd.addEventListener('click',()=>{
    addItem('Messeage:', messageField);
})

btnMessageDelete.addEventListener('click',()=>{
    deleteItem('Messeage:', messageField);
})

const btnReset = document.getElementById('reset');
btnReset.addEventListener('click', ()=>{
    localStorage.clear()
})

const showStoredItemsToInput =(property , propertyField)=>{
    const propertyFromLocal = localStorage.getItem(property)
    propertyField.value = propertyFromLocal;
}

showStoredItemsToInput('Name:', nameField)
showStoredItemsToInput('Email:', emailField)
showStoredItemsToInput('Messeage:', messageField)

//console.log(nameField, emailField, messageField, btnNameAdd, btnEmailAdd, btnNameDelete, btnEmailDelete, btnMessageAdd, btnMessageDelete, btnReset);

