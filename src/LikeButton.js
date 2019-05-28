import React from 'react';
import './LikeButton.css';
import likeImg from './images/like-image.png';

function LikeButton({ setLiked }) {
  return (
    <div className="like-button" onClick={ setLiked }>
      <img src={ likeImg } alt="like" />
    </div>
  );
}

export default LikeButton;