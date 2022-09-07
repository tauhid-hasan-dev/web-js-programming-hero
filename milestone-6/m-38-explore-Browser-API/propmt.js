console.log('this is a ')

//showing an alert 
const showAlert = () => {
    alert('Please try again')
}


//take a decesion from the user 
const showConfirm = () => {
    const decesion = confirm('Please confirm your booking');
    if (decesion === true) {
        alert('thanks for your confirmation')
    } else {
        alert('You have only 10 hours to confirm. Hurry up!!!')
    }
}

//take input from the customer 
const showPrompt = () => {
    const getInfo = prompt('please enter your name');
    if (!!getInfo) {
        alert(`welcome here, ${getInfo}`)
    }
}

