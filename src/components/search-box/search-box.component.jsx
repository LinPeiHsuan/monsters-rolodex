import React from 'react';
import './search-box.style.css';

// if you don't need an internal state nor a life-cycle method, just use a funstional componenet
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    className='search'
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}
    />
)