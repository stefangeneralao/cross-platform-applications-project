import React from 'react';
import './Card.css';
import LikeButton from './LikeButton';

function Card({ title, text, setLiked }) {
  return (
    <div className="card">
      <h2>{ title }</h2>
      <p>{ text }</p>
      {
        setLiked && (
          <LikeButton
            setLiked={ () => setLiked(title, text) }
          />
        )
      }
    </div>
  );
}

export default Card;