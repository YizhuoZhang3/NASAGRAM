import React from "react";

const Modal = ({handleClick}) => {
  const buttons = [
    {id: 1, label: "Report"},
    {id: 2, label: "Unfollow"},
    {id: 3, label: "Go to post"},
    {id: 4, label: "Tagged accounts"},
    {id: 5, label: "Share to..."},
    {id: 6, label: "Copy link"},
    {id: 7, label: "Embed"},
    {id: 8, label: "Cancel"},
  ];

  return (
    <div className="modal" onClick={handleClick}>
      <div className="modal-sec">
        {buttons.map((button) => (
          <div className="button" key={button.id} 
            onClick={handleClick}>
            {button.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;