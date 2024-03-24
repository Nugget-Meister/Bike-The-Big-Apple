import React from 'react';
import './Input.css'

const Input = ({id, placeholder, type, className}) => {
    return (
        <input 
            id={id || null}
            placeholder={placeholder}
            type={type}
            className={className || null}
            />
    );
}

export default Input;
