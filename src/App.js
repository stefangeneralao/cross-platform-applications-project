import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Main from './Main.js';

function App() {
  const [ results, setResults ] = useState([]);
  
  return (
    <div className="App">
      <Header />
      <SearchBar setResults={ setResults } />
      {/* <Menu /> */}
      <Main results={ results } />
    </div>
  );
}

export default App;
