import React, { useState, useEffect } from 'react'
import { successAlert, cancelAlert, confirmAlert } from '../Alert/Alert';
import { Button, Modal } from 'react-bootstrap'
import Form from '../FormActivities/Form'

const NewActivity = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className='d-flex justify-content-center mt-4 mb-4'>
        <Button variant="primary" onClick={handleShow}>
          Nueva Actividad
        </Button>
      </div>
      <Modal size='lg' show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form close={()=>handleClose()}/>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default NewActivity
