import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';

function App() {
  const [ results, setResults ] = useState([]);
  const [ liked, setLiked ] = useState([]);
  const [ isEmpty, setIsEmpty ] = useState(false);
  
  const setLikedHandler = (title, text) => {
    const newLiked = [
      { title, text },
      ...liked,
    ];
    setLiked(newLiked);
    localStorage.setItem('liked', JSON.stringify(newLiked));
    const newResults = [];
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      if (!(result.word === title && result.definition === text)) {
        newResults.push(result);
      }
    }
    setResults(newResults);
  };

  const removeLiked = (title, text) => {
    const filteredLiked = [];
    for (let i = 0; i < liked.length; i++) {
      const like = liked[i];
      if (!(like.title === title && like.text === text)) {
        filteredLiked.push(like);
      }
    }

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
      <Main
        results={ results }
        setLiked={ setLikedHandler }
        liked={ liked }
        setResults={ setResults }
        removeLiked={ removeLiked }
        setIsEmpty={ setIsEmpty }
        isEmpty={ isEmpty }
      />
    </div>
  );
}

export default App;
