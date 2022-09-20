import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

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
            <h1>This is countries: {countries.length}</h1>
            {
                countries.map(country => <Country country= {country}></Country>) //this is how we can send the whole data 
            }
        </div>
    );
};

export default Countries;