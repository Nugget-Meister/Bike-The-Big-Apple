import React from 'react';

const Form = ({children, onSubmit}) => {

    // console.log(children)

    return (
        <form
            className='Form ' 
            onSubmit={onSubmit}
        >
            {children}
        </form>
      );
}

export default Form;
