import React from 'react';
import Card from './Card';
import './LikedPage.css';
import noLikesImage from './images/no-likes.jpg';

function LikedPage({ liked, removeLiked }) {
  const likedCards = liked.map((like, i) => {
    return (
      <Card
        key={ i }
        text={ like.text }
        title={ like.title }
        removeLiked={ removeLiked }
      />
    );
  });
  
  return (
    <div className="liked-page">
      { liked.length <= 0 && (
        <div className="is-empty-placeholder">
          <img src={ noLikesImage } alt="no likes"/>
        </div>
      ) }
      <div className="liked-wrapper">
        { likedCards }
      </div>
    </div>
  );
}

export default LikedPage;