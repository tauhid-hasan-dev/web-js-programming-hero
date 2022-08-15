const taskOne = () => {
    console.log('first')
}
const dataLoading = () => {
    console.log('Task2. data Loading.....')
}
const taskTwo = () => {
    setTimeout(dataLoading, 1000);
}
const taskThree = () => {
    console.log('third')
}

