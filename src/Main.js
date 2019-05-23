import React from 'react';
import Card from './Card';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import LikedPage from './LikedPage';

function Main({ results, setLiked, liked }) {
  
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
        render={ () => <HomePage results={ results } setLiked={ setLiked }/> }
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