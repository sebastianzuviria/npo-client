import React, { useState } from 'react';
import BackOfficeLayout from '../../Layouts/BackOfficeLayout';
import NewsForm from '../../components/NewsForm/NewsForm';
import TableNovelties from '../../components/TableNovelties/TableNovelties'
import { Modal, Button } from 'react-bootstrap'

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <BackOfficeLayout>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Button style={{ margin: '30px', backgroundColor: '#0dcaf0', border: 'none'}} onClick={()=> setIsModalOpen(!isModalOpen)}>Crear Novedad</Button>
      </div>
      <TableNovelties />
      <Modal size='lg' show={isModalOpen} onHide={() => setIsModalOpen(!isModalOpen)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewsForm />
        </Modal.Body>
      </Modal>
    </BackOfficeLayout>
  );
};

export default News;
