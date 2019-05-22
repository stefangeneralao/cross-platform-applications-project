import React from 'react';
import Card from './Card';

function Main({ results }) {
  console.log('result in Main', results);
  
  const cards = results.map((result, i) => {
    return (
      <Card
        key={ i }
        text={ result.definition }
        title={ result.word }
      />
    );
  })
  
  return (
    <div className="main">
      { cards }
    </div>
  );
}

export default Main;