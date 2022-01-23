import React from 'react';
import HeartIcon from './HeartIcon';
import CommentIcon from './CommentIcon';
import ShareIcon from './ShareIcon';
import SaveIcon from './SaveIcon';

function ImageFooter({picture, isLiked, isSaved, isHeartClicked, handleLikeClick, handleSaveClick}){
  console.log(picture)
  return(
    <div className='image-footer'>
      <button className='heart-btn'
        isClicked={isHeartClicked}
        isLiked={isLiked}
        onClick={() => handleLikeClick(picture.id)}
        onClick={() => handleSaveClick(picture.id)}>
        <HeartIcon isLiked={isLiked}/>
      </button>
      <button className='comment-btn'>
        <CommentIcon />
      </button>
      <button className='share-btn'>
        <ShareIcon />
      </button>
      <button className='save-btn'>
        <SaveIcon isSaved={isSaved}/>
      </button>
    </div>
  );
}

export default ImageFooter;