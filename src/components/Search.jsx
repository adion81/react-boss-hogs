import React from 'react';

const Search = ({search, handleSearch}) => {
    return (
        <div className="col-3 mx-auto">
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input 
            type="text" 
            className="form-control"
            name="search"
            value={search}
            onChange={ (e) => handleSearch(e.target.value) }
          />
        </div>
      </div>
    );
}

export default Search;