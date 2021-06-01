import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { successAlert, cancelAlert, confirmAlert } from '../Alert/Alert';
import NewsForm from '../NewsForm/NewsForm';
import {
  loadNovelties,
  deleteNovelties,
  noveltiesSelector
} from '../../slices/backNoveltiesSlice';

import { Modal } from 'react-bootstrap';
import './TableNovelties.css';

const TableNovelties = () => {
  const novelties = useSelector(noveltiesSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noveltyToEdit, setNoveltyToEdit] = useState('');
  const dispatch = useDispatch();

  const delet = async (id) => {
    const res = await confirmAlert();
    if (!res.isConfirmed) {
      return await cancelAlert();
    }
    dispatch(deleteNovelties(id));
    return successAlert();
  };

  useEffect(() => {
    dispatch(loadNovelties());
  }, [dispatch]);

  return (
    <div className="d-flex justify-content-center">
      <div className="table-overflow">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Url de imagen</th>
              <th scope="col">Creado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {novelties.map((novelty, i) => (
              <tr key={i}>
                <td>{novelty.title}</td>
                <td>{novelty.image}</td>
                <td>{novelty.createdAt}</td>
                <td>
                  <button
                    onClick={() => {
                      setIsModalOpen(!isModalOpen);
                      setNoveltyToEdit(novelty.id);
                    }}
                    type="button"
                    className="btn btn-info"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    style={{ color: 'white', marginRight: '5px' }}
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>

                  <button
                    onClick={() => delet('news', novelty.id)}
                    className="btn btn-danger"
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        size="lg"
        show={isModalOpen}
        onHide={() => setIsModalOpen(!isModalOpen)}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewsForm id={noveltyToEdit} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TableNovelties;
