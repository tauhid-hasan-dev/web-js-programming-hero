import logo from './logo.svg';
import './App.css';

function App() {
  const persons = [
    {name: "Tauhid", age: 56},
    {name: "Hasib", age: 33},
    {name: "Mehedi", age: 12},
    {name: "Hasan", age: 67},
    {name: "Muaz", age: 67},
    {name: "Sabiha", age: 67},
    {name: "Raed", age: 67},
  ]
  return (
    <div className="App">
      {
        persons.map(person => <Person name ={person.name} age={person.age}> </Person>)
      }
    </div>
  );
}

export default App;

function Person(props){
  const {name, age} = props
  return(
    <div className='person'>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
    </div>
  )
}
