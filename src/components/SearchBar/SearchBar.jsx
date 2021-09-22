import React, { useState } from 'react';

const SearchBar = (props) => {
    
    return (
        <div className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search..." onChange={props.handleChange} aria-label="Search"
                aria-describedby="search-addon" 
            />
        </div>
    )
}
export default SearchBar