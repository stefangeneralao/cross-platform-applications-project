import React from 'react';

function LikedPage({ likedCards }) {
  console.log(likedCards);
  
  return (
    <div className="liked-page">
      { likedCards }
    </div>
  );
}

export default LikedPage;