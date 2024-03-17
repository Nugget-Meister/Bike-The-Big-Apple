import React from 'react';
import Input from '../../../../common/Input/Input.jsx';
import './SearchBox.css'
const SearchBox = ({id}) => {
    return (
        <>
            <Input
                id={id}
                className='SearchBox'
                placeholder='Enter a place'
                type='text'
            />
        </>
    );
}

export default SearchBox;
