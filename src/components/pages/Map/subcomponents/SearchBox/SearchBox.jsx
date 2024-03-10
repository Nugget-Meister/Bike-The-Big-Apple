import React from 'react';
import Input from '../../../../common/Input/Input.jsx';

const SearchBox = () => {
    return (
        <>
            <Input
                id='autocomplete'
                placeholder='Enter a place'
                type='text'
            />
        </>
    );
}

export default SearchBox;
