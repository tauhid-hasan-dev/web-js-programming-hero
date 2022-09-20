import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    const {name, flags, population} = props.country; 
    const {common} = name;
    const {png} = flags;
    //props is a object and country is property of props object and country itself is a object
    return (
        <div className='country'>
            <img src={png} alt="" />
            <h1>Name :{common}</h1>
            <h3>Population: {population}</h3>
        </div>
    );
};

export default Country;