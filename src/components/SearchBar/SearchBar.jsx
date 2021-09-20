import React from 'react';

const SearchBar = (props) => {
    return (
        <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search..." onChange={props.handleChange} aria-label="Search"
                aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary">search</button>
        </div>
    )
}
export default SearchBar