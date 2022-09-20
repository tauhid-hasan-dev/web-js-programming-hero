/* To load External data in React We need to follow five steps:
       1-  declare a state with useState() hook
       2-  useEffect() hook to fetch data from an api 
          (useEffect takes two parameter 
            1- an anonymous function  
            2- empty array as a dependency )
       3- Load Data from api inside the useEffect
       4- Connect with state(store the data to the initial state declare in useState)
       5- map the data and show the ui */

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <Users></Users>
    </div>
  );
}

function Users(){
  //step-1: declare a state with useState() hook

  const [users, setUsers] = useState([]);

  //step-1: useEffect() hook to fetch data from an api
  useEffect(()=>{
    //step-3: Load Data from api inside the useEffect
    const loadData = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        //step-4: Connect with state(store the data to the initial state declare in useState)
        setUsers(data) 
    }
    loadData();
  },[]);

  return(
    <div >
      {
        //step-5:  map the data and show the ui
        users.map(user => <Info name = {user.name}  username = {user.username} email = {user.email}></Info>)
      }
    </div>
  )
}


function Info(props){
  const {name, username , email} = props;
  return(
    <div style = {{border:"2px solid black", width:"50%", marginLeft: "auto", marginRight:"auto", marginTop:"10px"}}>
      <h1>Name: {name}</h1>
      <h3>Username: {username}</h3>
      <h3 >Email: <span style={{color:"blue"}}>{email}</span> </h3>
    </div>
  )
}

export default App;
