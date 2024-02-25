import "./App.css";
import { useState } from "react";
import Modal from "./modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={handleOpenModal}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Modal Content</h2>
        <p>This is some content inside the modal.</p>
      </Modal>
    </div>
  );
}

export default App;
