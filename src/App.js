import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import Main from './Main.js';

function App() {
  const [ results, setResults ] = useState([]);
  const [ liked, setLiked ] = useState([]);
  
  const setLikedHandler = (title, text) => {
    const newLiked = [
      ...liked,
      { title, text }
    ];
    setLiked(newLiked);
    localStorage.setItem('liked', JSON.stringify(newLiked));
  };

  useEffect(() => {
    const lsLiked = JSON.parse(localStorage.getItem('liked'));
    if (lsLiked) {
      setLiked(lsLiked);
    }
  }, [liked]);
  
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
