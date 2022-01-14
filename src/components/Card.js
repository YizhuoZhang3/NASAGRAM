import React, {useRef, useState} from "react";
import Modal from "./Modal";
import CardHeader from "./CardHeader";

const Card = (props) => {
  const image = props.picture;
  const [showModal, setShowModal] = useState(false);
  const handleMoreOptionsClick = () => {
    setShowModal(!showModal);
  };
  const picture = {
    user:{
      picture: "http://logok.org/wp-content/uploads/2015/02/NASA-logo-880x660.png",
      username: 'nasa'
    }
  }

  return (
    <div className="card-container">
    {showModal && <Modal handleClick={handleMoreOptionsClick} />}
    <CardHeader
        handleMoreOptionsClick={handleMoreOptionsClick}
        picture={picture}
      />
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