import React from 'react';
import Card from './Card';
import SearchBar from './SearchBar.js';
import './HomePage.css';
import noResultImage from './images/bugs.jpg';
import initialImage from './images/javascript-meme.png';

function HomePage({ results, setLiked, setResults, setIsEmpty, isEmpty }) {
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
  
  const isShowingInitialImage = !isEmpty && !results.length;
  
  return (
    <div className="home-page">
      <SearchBar setResults={ setResults } setIsEmpty={ setIsEmpty }/>
      { isEmpty && (
        <div className="is-empty-placeholder">
            <img src={ noResultImage } alt="no result"/>
        </div>
      ) }
      { isShowingInitialImage && (
        <div className="initial-image-placeholder">
          <img src={ initialImage } alt="initial"/>
        </div>
      ) }
      <div className="card-wrapper">
        { resultCards }
      </div>
    </div>
  );
}

export default HomePage;