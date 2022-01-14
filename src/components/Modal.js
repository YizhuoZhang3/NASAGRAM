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
      <div className="modal-container">
        {buttons.map((button) => (
          <button type="button" className="btn" key={button.id} 
            onClick={handleClick}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Modal;