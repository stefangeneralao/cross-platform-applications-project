import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const udURL = 'http://api.urbandictionary.com/v0/define?term=';

function SearchBar({ setResults }) {
  const [ value, setValue ] = useState('burrito');
  
  function onSubmitHandler(event) {
    event.preventDefault();
    axios.get(udURL + value)
      .then(resp => {
        const results = resp.data.list;
        setResults(results);
      })
  }
  
  function onChangeHandler(event) {
    const value = event.target.value;
    setValue(value);
  }
  
  return (
    <div className="search-bar">
      <form onSubmit={ onSubmitHandler }>
        <input
          placeholder={ 'Type any word...' }
          onChange={ onChangeHandler }
          value={ value }
        />
      </form>
    </div>
  );
}

export default SearchBar;