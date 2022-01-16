import React, {useRef, useState} from "react";
import Modal from "./Modal";
import CardHeader from "./CardHeader";
import ImageFooter from "./ImageFooter";

const Card = (props) => {
  const image = props.picture;
  const [showModal, setShowModal] = useState(false);
  const handleMoreOptionsClick = () => {
    setShowModal(!showModal);
  };

  const [isLiked, setIsLiked] = useState(false);
  // const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  // const [comments, setComments] = useState([]);

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
        <ImageFooter isLiked={isLiked} isSaved={isSaved}/>
        <div className="fig-container">
          <div className="figcaption">{image.title}</div>
          <div className="date">Published on {image.date}</div>
          <p className="desc">{image.explanation} </p>
        </div>
      </div>
    </div>
  )
}

export default Card;