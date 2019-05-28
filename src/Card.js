import React from 'react';
import './Card.css';
import LikeButton from './LikeButton';
import RemoveButton from './RemoveButton';

function Card({ title, text, setLiked, removeLiked }) {
  return (
    <div className="card">
      <h2>{ title }</h2>
      <hr/>
      <p>{ text }</p>
      {
        setLiked && (
          <LikeButton
            setLiked={ () => setLiked(title, text) }
          />
        )
      }
      {
        removeLiked && (
          <RemoveButton
            removeLiked={ () => removeLiked(title, text) }
          />
        )
      }
    </div>
  );
}

export default Card;