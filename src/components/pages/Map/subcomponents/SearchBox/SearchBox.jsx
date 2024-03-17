import React from 'react';
import Input from '../../../../common/Input/Input.jsx';
import './SearchBox.css'
const SearchBox = () => {
    return (
        <>
            <Input
                id='autocomplete'
                className='SearchBox'
                placeholder='Enter a place'
                type='text'
            />
        </>
    );
}

export default SearchBox;
