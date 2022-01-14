import React from "react";

const Card = (props) => {
  const image = props.picture;

  return (
    <div className="card-container">
      <figure>
        <img src={image.url} alt={image.title} />
        <figcaption>{image.title}</figcaption>
        <div className="date">Published on {image.date}</div>
        <p className="desc">{image.explanation} </p>
      </figure>
    </div>
  )
}

export default Card;