import React from "react";
import "./MyApplications.css";

const ResumeModal = ({ imageUrl, onClose }) => {

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("resume-modal")) {
      onClose();
    }
  };

  return (
    <div className="resume-modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="Resume" />
      </div>
    </div>
  );
};

export default ResumeModal;
