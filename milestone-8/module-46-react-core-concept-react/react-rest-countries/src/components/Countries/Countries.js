import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const loadData = async() =>{
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            setCountries(data)
        }
        loadData();
    },[])
    return (
        <div>
            <h1>Total country: {countries.length}</h1>
            <div className='card-container'>
            {
                countries.map(country => <Country country= {country} ke></Country>) //this is how we can send the whole data 
            }
            </div>
            
        </div>
    );
};

export default Countries;