import React from 'react';
import Card from './Card';

function HomePage({ results, setLiked }) {
  const resultCards = results.map((result, i) => {
    return (
      <Card
        key={ i }
        text={ result.definition }
        title={ result.word }
        setLiked={ setLiked }
      />
    );
  });
  
  return (
    <div className="home-page">
      { resultCards }
    </div>
  );
}

export default HomePage;