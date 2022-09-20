import { useState } from 'react';
import './App.css';

//this is the main function rendering in the ui
function App() {
  return (
    <div className="App">
        <Counter></Counter>
    </div>
  );
}


/* Counter Component */
function Counter() {
  //setting state 
  const [count, setCount] = useState(50); //destructuring the useState array

  //updating state
  const increaseCount = () => setCount(count+1);
  /* const increaseCount = () =>{
    const newCount = count + 1;
    setCount(newCount)
  } */
  const decreaseCount = () => setCount(count - 1)
  /* const decreaseCount = ( ) =>{
    const newCount = count - 1
    setCount(newCount)
  } */
  return (
    <div>
      <h1 >Counter: {count}</h1>
      <button onClick={decreaseCount} style = {{margin: "5px"}}>-</button>
      <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default App;
