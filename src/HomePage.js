import React from 'react';
import Card from './Card';
import SearchBar from './SearchBar.js';

function HomePage({ results, setLiked, setResults, removeLiked }) {
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
      <SearchBar setResults={ setResults } />
      { resultCards }
    </div>
  );
}

export default HomePage;