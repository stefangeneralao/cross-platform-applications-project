import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Main from './Main.js';

function App() {
  const [ results, setResults ] = useState([]);
  const [ liked, setLiked ] = useState([]);
  
  const setLikedHandler = (title, text) => {
    setLiked([
      ...liked,
      { title, text }
    ]);
  };
  
  return (
    <div className="App">
      <Header />
      <SearchBar setResults={ setResults } />
      {/* <Menu /> */}
      <Main
        results={ results }
        setLiked={ setLikedHandler }
        liked={ liked }
      />
    </div>
  );
}

export default App;
