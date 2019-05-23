import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
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
       {/* <Menu /> */}
      <Main
        results={ results }
        setLiked={ setLikedHandler }
        liked={ liked }
        setResults={setResults}
      />
    </div>
  );
}

export default App;
