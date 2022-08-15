

const btnDelete = document.getElementById('btn-delete');
const inputText = document.getElementById('input-text');

inputText.addEventListener('keyup', (e) => {
    const inputValue = e.target.value;
    if (inputValue === 'delete') {
        btnDelete.removeAttribute('disabled');
    } else {
        btnDelete.setAttribute('disabled', true);
    }
})

btnDelete.addEventListener('click', () => {
    const headerText = document.getElementById('secret-info');
    headerText.style.display = 'none'
})


