import React, {useRef, useState} from "react";
import Modal from "./Modal";
import CardHeader from "./CardHeader";
import ImageFooter from "./ImageFooter";

const picture = {
  user:{
    picture: "https://m.media-amazon.com/images/I/61BITGhLxNL._AC_UX466_.jpg",
    username: 'nasa'
  }
}

const Card = ({image, like, unlike, save, remove}) => {
  const [showModal, setShowModal] = useState(false);
  const handleMoreOptionsClick = () => {
    setShowModal(!showModal);
  };
  const [isLiked, setIsLiked] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLikeClick = (id) => {
    let timeoutid;
    setIsHeartClicked(true);
    if (isLiked) {
      unlike(id);
      setIsLiked(false);
    } else {
      like(id);
      setIsLiked(true);
    }
    if (!timeoutid) {
      timeoutid = setTimeout(() => {
        setIsHeartClicked(false);
      }, 450);
    }
  };

  const handleSaveClick = (id) => {
    if (isSaved) {
      remove(id);
      setIsSaved(false);
    } else {
      save(id);
      setIsSaved(true);
    }
  };

  return (
    <div className="card-container">
    {showModal && <Modal handleClick={handleMoreOptionsClick} />}
    <CardHeader
        handleMoreOptionsClick={handleMoreOptionsClick}
        picture={picture}
      />
      <div className="figure">
        <img src={image.url} alt={image.title} />
        <ImageFooter 
          isLiked={isLiked} 
          isSaved={isSaved} 
          handleLikeClick={handleLikeClick}
          handleSaveClick={handleSaveClick}
          isHeartClicked={isHeartClicked}
          picture={image}
          />
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