import React from 'react';
import MoreOptionsIcon from './MoreOptionsIcon';

function CardHeader({handleMoreOptionsClick, picture}) {
  return (
    <div className='card-header' >
      <div className="container">
        <img
          src={picture.user.picture}
          alt={`${picture.user.username}'s profile pic`}
        />
        <span>{picture.user.username}</span>
      </div>
      <button type="button" onClick={handleMoreOptionsClick}>
        <MoreOptionsIcon />
      </button>
    </div>
  );
}

export default CardHeader;