import React, { useState, useEffect } from 'react'
import './Table.css'
import apiGetService from '../../services/apiGetService'
import apiDeleteService from '../../services/apiDeleteService'
import apiUpdateService from '../../services/apiUpdateService'
import { successAlert, cancelAlert, confirmAlert } from '../Alert/Alert';
import { Button, Modal } from 'react-bootstrap'

const Table = () => {
  const [users, setUsers] = useState([])
  const [newObject, setNewObject] = useState({})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const update = async (id) => {
    const res = await confirmAlert();
    if (res.isConfirmed) {
      await apiUpdateService('users', id, newObject)
      setUsers(users.map(user => (user.id === newObject.id ? newObject : user)))
      handleClose()
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
      let newUser = users.filter(user => {
        return user.id !== id
      })
      setUsers(newUser)
      return successAlert()
    }
  };
  useEffect(() => {

    (async () => {
      const returnedUsers = await apiGetService('users');
      setUsers(returnedUsers);
    })();

  }, [])
  return (
    <div className='d-flex justify-content-center'>
      <table className="table table-bordered table-hw">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="primary" onClick={/* () => edit('users',user.id)*/handleShow}>
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Role</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <label className="form-label">Role ID</label>
                    <select className='form-control' 
                      name='roleId' 
                      onChange={(e) => {
                        setNewObject({ ...newObject, [e.target.name]: e.target.value })
                      }}>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </select>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={()=>update(user.id)}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <button
                  onClick={() => delet('users', user.id)}
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
  )
}

export default Table
