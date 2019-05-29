import React from 'react';
import Card from './Card';
import SearchBar from './SearchBar.js';
import './HomePage.css';

function HomePage({ results, setLiked, setResults, removeLiked, setIsEmpty, isEmpty }) {
  const resultCards = results.map((result, i) => {
    return (
      <Card
        key={ i }
        text={ result.definition }
        title={ result.word }
        setLiked={ setLiked }
        removeLiked={ removeLiked }
      />
    );
  });
  
  return (
    <div className="home-page">
      <SearchBar setResults={ setResults } setIsEmpty={ setIsEmpty }/>
      <div className="is-empty-placeholder">
        { isEmpty && (<p>Inga resultat</p>) }
      </div>
      <div className="card-wrapper">
        { resultCards }
      </div>
    </div>
  );
}

export default HomePage;