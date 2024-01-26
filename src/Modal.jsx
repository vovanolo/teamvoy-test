import React from "react";

const Modal = ({ isOpen, closeModal, title, content }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} className="close-button">
              Close
            </button>
            <h2>{title}</h2>
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
