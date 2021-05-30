import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EditBtn = ({ text, icon, children }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <button
        className="btn-sm  btn-warning  border-0 p-2 px-3 mt-2"
        onClick={handleModal}
      >
        <i className={`fa ${icon} me-2`} />
        {text}
      </button>
      <Modal
        show={showModal}
        onHide={handleModal}
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edita tus datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
          <Button className="btn-danger w-100" onClick={handleModal}>
            Cancelar
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditBtn;
