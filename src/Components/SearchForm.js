import React from 'react';
import '../App.css';

function SearchForm(props) {

    const Search  = (e) =>{
        props.handleSearch(e.target.value);
    }

    return (

      <div>
            <input type="search" 
                className="input-text" 
                name="search"
                placeholder="Search" 
                onChange={Search}
            />
            <button>Search</button>
      </div>
    );
  }

  
  export default SearchForm;