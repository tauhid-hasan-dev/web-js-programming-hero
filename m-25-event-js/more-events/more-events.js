const btnEvent = document.getElementById('btn-more');
const inputField = document.getElementById('text-field')
/* btnEvent.addEventListener('click', () => {
    console.log("clicked")
})
 */
/* inputField.addEventListener('blur', () => {
    console.log('blur')
}) */

//keyup is the best option for to get the value of a input
inputField.addEventListener('keyup', (e) => {
    console.log(e.target.value)
})