import React from 'react';
import './LikeButton.css';

const likeImgURL = 'https://cdn-images-1.medium.com/max/1200/1*tvVwxlm6wz1x9nUabQNrXg.png';

function LikeButton({ setLiked }) {
  return (
    <div className="like-button" onClick={ setLiked }>
      <img src={ likeImgURL } alt="like" />
    </div>
  );
}

export default LikeButton;