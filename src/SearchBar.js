import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const udURL = 'http://api.urbandictionary.com/v0/define?term=';

function removeBrackets(value) {
  const filteredValue = value.replace(/[[\]]/g, '');
  return filteredValue;
}

function SearchBar({ setResults, setIsEmpty }) {
  const [ value, setValue ] = useState('');
  
  function onSubmitHandler(event) {
    event.preventDefault();
    axios.get(udURL + value)
      .then(resp => {
        const results = resp.data.list;
        const filteredResults = results.map(result => ({
          ...result,
          definition: removeBrackets(result.definition),
        }));
        if (results.length === 0){
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
        setResults(filteredResults);
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