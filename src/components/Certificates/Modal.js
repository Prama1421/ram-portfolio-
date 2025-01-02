import React from "react";
import { X } from "lucide-react"; // Importing the X icon
import "./Modal.css"; // Import a CSS file for styling the modal

const Modal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen) return null; // If not open, don't render anything

return (
    <div className="modal-overlay">
    <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <X size={24} /> {/* X icon from lucide-react */}
        </button>
        {/* <h2>{certificate.title}</h2>
        <p>{certificate.issuer}</p>
        <p>{certificate.date}</p> */}
        <img
        src={certificate.link}
        alt={`${certificate.title} certificate`}
        className="modal-image"
        />
    </div>
    </div>
);
};

export default Modal;
