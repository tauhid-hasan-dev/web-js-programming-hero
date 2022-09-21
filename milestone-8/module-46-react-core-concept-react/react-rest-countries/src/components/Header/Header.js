import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Country Book</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/trips">Trips</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;