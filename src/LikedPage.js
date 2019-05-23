import React from 'react';
import Card from './Card';

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
  })

  return (
    <div className="liked-page">
      { likedCards }
    </div>
  );
}

export default LikedPage;