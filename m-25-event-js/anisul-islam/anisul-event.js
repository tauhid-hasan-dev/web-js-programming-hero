
function showParagraph() {
    let paragraph = document.getElementById('paraId');
    paragraph.innerHTML = "Congratulations!!! You just created first clickable button";
}
function showParagraph2() {
    let paragraph = document.getElementById('paraId');
    paragraph.innerHTML = "This is your second button to be created by you";
}

function showImage1() {
    const images = document.getElementById('images');
    images.src = 'https://images.pexels.com/photos/6555781/pexels-photo-6555781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}

const header = document.querySelector('h1');
header.addEventListener('mouseover', () => {
    header.classList.add('add-style')
})


header.addEventListener('mouseout', () => {
    header.classList.remove('add-style')
})