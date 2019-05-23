import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import LikedPage from './LikedPage';

function Main({ results, setLiked, liked, setResults, removeLiked }) {
  
  return (
    <div className="main">
      <Route
        path="/"
        exact
        render={ () => <HomePage results={ results } setLiked={ setLiked } setResults={setResults}/>}
      />
      <Route
        path="/liked"
        exact
        component={ () => <LikedPage liked={ liked } removeLiked={ removeLiked }/> }
      />
    </div>
  );
}

export default Main;