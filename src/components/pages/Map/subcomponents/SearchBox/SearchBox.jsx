import React from 'react';
import Input from '../../../../common/Input/Input.jsx';
import './SearchBox.css'

import { useContext } from 'react';
import { PathContext } from '../../helpers/pathContext.js';


const SearchBox = ({id}) => {
    const {path, setPath} = useContext(PathContext)

    // console.log(path, setPath)

    // console.log(thisPath)

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
