import React from 'react';
import './SearchBox.css';

const SearchBox = ( {searchChange} ) => {
    return (
        <div className='pa2'>
            <input 
                type="search"
                placeholder="Search Member"
                onChange = {searchChange}
                className='pa3 ba br3 tc b--dark-gray bg-dark-gray near-white'
            />
        </div>
    )
} 

export default SearchBox;