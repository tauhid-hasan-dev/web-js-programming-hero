import { useEffect, useState } from 'react';
import './App.css';

const divStyle = {
  border: "2px solid red",
  width: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "20px"
}

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    const loadData = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setCountries(data);
    }
    loadData()
  }, []);

  return(
    <div>
        {
          countries.map(user => <DisplayToUI name = {user.name} username = {user.username} email= {user.email}></DisplayToUI>)
        }
        <p>name</p>
    </div>
  )
}

function DisplayToUI(props){
  const {name, username, email} = props;
  return(
    <div style={divStyle}>
        <h1>Name: <span style={{color:"blue"}}>{name}</span> </h1>
        <h3>Name:{username} </h3>
        <p>Name:{email} </p>
    </div>
  )
}

export default App;
