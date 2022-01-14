import React from "react";

const Card = (props) => {
  const image = props.picture;
  return (
    <div className="CardContainer">
     
        <img src={image.url} alt={image.title} />
    
    </div>
  )
}

export default Card;