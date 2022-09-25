import React from 'react';
import { addToDb, removeItem } from '../FakeDb/FakeDb';

const CustomApi = (props) => {
    const {id, name , age, company} = props.person;
    
    const addHandler = id =>{
        addToDb(id);
    }

    const removeHandler = id => {
        removeItem(id)
    }

    return (
        <div style={{border:"3px solid red", margin:"20px 50px 20px 50px", padding:"20px" }}>
            <h1>This is my name:{name}</h1>
            <h2>This is my age:{age}</h2>
            <h3>ID : {id}</h3>
            <h5 style={{color: "red"}}>company: {company}</h5>
            <button onClick={()=>addHandler(id)}>add to cart</button>
            <button onClick={()=>removeHandler(id)}>Remove item</button>
        </div>
    );
};

export default CustomApi;