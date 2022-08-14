

const addCommentBtn = document.getElementById('btn-comment');
addCommentBtn.addEventListener('click', () => {
    let mainSection = document.getElementById('main-section');
    /*     mainSection.style.padding = '0 500px';
        mainSection.style.textAlign = 'left' */
    const inputArea = document.getElementById('input-comment');
    const inputValue = inputArea.value;
    const paragraph = document.createElement('p');
    paragraph.innerText = inputValue;
    mainSection.appendChild(paragraph);
    inputArea.value = '';
})