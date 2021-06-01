import React, { useState, useEffect } from 'react'
import apiGetService from '../../services/apiGetService'
import apiDeleteService from '../../services/apiDeleteService'
import apiUpdateService from '../../services/apiUpdateService'
import { successAlert, cancelAlert, confirmAlert } from '../Alert/Alert';
import { Button, Modal } from 'react-bootstrap'
import FormActivity from '../FormActivities/Form'
import NewActivity from './NewActivity'

const Table = () => {
  const [activities, setActivities] = useState([]);
  const [newObject, setNewObject] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const edit = async (type, id) => {
    const returnedActivity = await apiGetService(type, id);
    setNewObject(returnedActivity)
    handleShow()
  };
  const update = async () => {
    const res = await confirmAlert();
    if (res.isConfirmed) {
      await apiUpdateService('activities', newObject.id, newObject)
      setActivities(activities.map(activity => (activity.id === newObject.id ? newObject : activity)))
      return successAlert()
    } else {
      cancelAlert();
    }
  }
  const delet = async (type, id) => {
    const res = await confirmAlert();
    if (!res.isConfirmed) {
      return await cancelAlert();
    }
    const deleted = await apiDeleteService(type, id)
    if (deleted) {
      let newActivity = activities.filter(activity => {
        return activity.id !== id
      })
      setActivities(newActivity)
      return successAlert();
    }
  };
  useEffect(() => {
    (async () => {
      const returnedActivities = await apiGetService('activities');
      setActivities(returnedActivities);
    })();
  }, [])
  return (
    <div className="container">
      <NewActivity />
      <table className="table table-bordered table-light">
        <thead>
          <tr>
            <th scope="col">Nombre de actividad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            activities.map((act, i) => (
              <tr key={i}>
                <td>{act.name}</td>
                <td>
                  <Button variant="primary" onClick={() => edit('activities', act.id)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </Button>
                  <button
                    onClick={() => delet('activities', act.id)}
                    className="btn btn-danger"
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormActivity activity={newObject} close={() => handleClose()} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Table
