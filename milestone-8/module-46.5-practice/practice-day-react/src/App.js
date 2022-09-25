import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

   const increaseNum = () =>{
    setCount(count + 1);
  }

  const decreseNum = () =>{
    setCount(count - 1);
  } 

  return (
    <div className="App">
      <h1>This is the brand new project</h1>
      <Counter 
        count = {count} 
        increaseNum = {increaseNum}
        decreseNum = {decreseNum}
        >
      </Counter>
    </div>
  );
}

export default App;
