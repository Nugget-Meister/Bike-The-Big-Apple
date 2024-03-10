import React from 'react';


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
