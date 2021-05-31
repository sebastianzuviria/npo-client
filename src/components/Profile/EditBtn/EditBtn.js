import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalState } from '../../../slices/modalSlice';

const EditBtn = ({ text, icon, children, modalName }) => {
  const showModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(changeModalState(modalName));
  };
  const closeModal = () => {
    dispatch(changeModalState(''));
  };

  return (
    <>
      <button
        className="btn-sm text-nowrap btn-warning border-0 p-2 px-3"
        onClick={openModal}
      >
        <i className={`fa ${icon} me-2`} />
        {text}
      </button>
      <Modal
        show={showModal === modalName}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edita tus datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
          <Button className="btn-danger w-100" onClick={closeModal}>
            Cancelar
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditBtn;
