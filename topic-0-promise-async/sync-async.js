const taskOne = () => {
    console.log('first')
}
const dataLoading = () => {
    console.log('Task2. data Loading.....')
}
const taskTwo = () => {
    setTimeout(dataLoading, 1000);
    //this is a asynchronous function it helps to run code without any blockade.
    //set time out function normally web api te thake.
}
const taskThree = () => {
    console.log('third')
}

taskOne();
taskTwo();
taskThree();
