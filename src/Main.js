import React from 'react';
import Card from './Card';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import LikedPage from './LikedPage';

function Main({ results, setLiked, liked }) {
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

  console.log('liked', liked);
  console.log('results', results);
  
  const likedCards = liked.map((like, i) => {
    return (
      <Card
        key={ i }
        text={ like.text }
        title={ like.title }
      />
    );
  })
  
  return (
    <div className="main">
      <Route
        path="/"
        exact
        render={ () => <HomePage resultCards={ resultCards } /> }
      />
      <Route
        path="/liked"
        exact
        component={ () => <LikedPage likedCards={ likedCards } /> }
      />
    </div>
  );
}

export default Main;