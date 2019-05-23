import React from 'react';
import './RemoveButton.css';

const removeImgURL = 'https://cdn1.iconfinder.com/data/icons/ios-11-ui-elements-vol-1/29/22_cancel_close_cross_delete_remove_button-512.png';

function RemoveButton({ removeLiked }) {
  return (
    <div className="remove-button" onClick={ removeLiked }>
      <img src={ removeImgURL } alt="like" />
    </div>
  );
}

export default RemoveButton;