import { useEffect, useState } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };
  return (
    <>
      {isVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close-btn" onClick={handleClose}>
              Close
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
