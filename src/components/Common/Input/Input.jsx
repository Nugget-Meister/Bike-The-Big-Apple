import React from 'react';
import './Input.css'

const Input = ({id, placeholder, type}) => {
    return (
        <input 
            id={id || null}
            placeholder={placeholder}
            type={type}
            >
            
        </input>
    );
}

export default Input;
