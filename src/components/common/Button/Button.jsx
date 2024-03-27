import React from 'react';

const Button = ({className, type, children}) => {
    return (
        <button 
            type={type}
            className={className}
            >
                {children}
        </button>
    );
}

export default Button;
