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

  const removeLiked = (title, text) => {
    console.log('liked', liked);
    const filteredLiked = liked.filter(like => {
      if (like.title === title && like.text === text) {
        return false;
      }
      return true;
    });
    setLiked(filteredLiked);
    localStorage.setItem('liked', JSON.stringify(filteredLiked));
  }

  useEffect(() => {
    const lsLiked = JSON.parse(localStorage.getItem('liked'));
    if (lsLiked) {
      setLiked(lsLiked);
    }
  }, []);
  
  return (
    <div className="App">
      <Header />
       {/* <Menu /> */}
      <Main
        results={ results }
        setLiked={ setLikedHandler }
        liked={ liked }
        setResults={setResults}
        removeLiked={ removeLiked }
      />
    </div>
  );
}

export default App;
