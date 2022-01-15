import React from 'react';
import HeartIcon from './HeartIcon';

function ImageFooter({isLiked}){
  return(
    <div className='image-footer'>
      <button className='heart-btn'>
        <HeartIcon isLiked={isLiked}/>
      </button>
    </div>
  );
}

export default ImageFooter;