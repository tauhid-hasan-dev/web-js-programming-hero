import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import CustomApi from './components/Customapi/CustomApi';

function App() {
 const [persons, setPersons] = useState([]);

 const loadData = async()=>{
  const res = await fetch('https://manushjon.free.beeceptor.com/');
  const data = await res.json();
  console.log(data);
   setPersons(data)
 }

 useEffect(()=>{
    loadData();
 },[])
 
  return (
    <div className="App">
      {
        persons.map(person => <CustomApi person = {person} key={person.id}></CustomApi>)
      }
    </div>
  );
}

export default App;
