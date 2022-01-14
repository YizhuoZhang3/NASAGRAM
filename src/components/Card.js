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
      picture: "https://m.media-amazon.com/images/I/61BITGhLxNL._AC_UX466_.jpg",
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
      <div className="figure">
        <img src={image.url} alt={image.title} />
        <div className="figcaption">{image.title}</div>
        <div className="date">Published on {image.date}</div>
        <p className="desc">{image.explanation} </p>
      </div>
    </div>
  )
}

export default Card;