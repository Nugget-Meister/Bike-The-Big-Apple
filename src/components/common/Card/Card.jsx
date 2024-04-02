import React from 'react';

const Card = ({children}) => {
    return (
        <div
            className='Card absolute top-[10%] left-[50%] translate-x-[-50%] w-[90%] max-w-md bg-blue-500 p-4 rounded-lg shadow-lg z-10'
            >
            {children}
        </div>
    );
}

export default Card;