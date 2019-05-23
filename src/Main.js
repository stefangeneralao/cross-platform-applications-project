import React from 'react';
import Card from './Card';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import LikedPage from './LikedPage';

function Main({ results, setLiked, liked }) {
  
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
        component={ () => <LikedPage liked={ liked } /> }
      />
    </div>
  );
}

export default Main;