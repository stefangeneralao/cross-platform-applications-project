import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import LikedPage from './LikedPage';

function Main({ results, setLiked, liked, setResults, removeLiked, setIsEmpty, isEmpty }) {
  return (
    <div className="main">
      <Route
        path="/"
        exact
        render={ () => (
          <HomePage
            results={ results }
            setLiked={ setLiked }
            setResults={ setResults }
            setIsEmpty={ setIsEmpty }
            isEmpty={ isEmpty }
          />
        )}
      />
      <Route
        path="/liked"
        exact
        component={ () => (
          <LikedPage
            liked={ liked }
            removeLiked={ removeLiked }
          />
        )}
      />
    </div>
  );
}

export default Main;