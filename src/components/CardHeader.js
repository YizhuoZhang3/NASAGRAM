import React from 'react';

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
    </div>
  );
}

export default CardHeader;