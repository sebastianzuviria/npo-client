import React, { useState, useEffect } from 'react'
import './Table.css'
import apiGet from '../../services/apiGetService'
// import Axios from 'axios'
import swal from "sweetalert";

const Table = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [userID, setUserID] = useState('')
    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [email, setEmail]= useState('')
    

    const edit = (id) => {
        (async () => {

            const returnedUser = await apiGet('users', id) ;
            setFirstName(returnedUser.firstName)
            setLastName(returnedUser.lastName)
            setEmail(returnedUser.email)
            
        }) ();
    };
    const update = () => {
        // 
    }
    const delet = (id) => {
        // 
    };
    useEffect(() => {

        ( async ( ) => {
            const returnedUsers = await apiGet('users') ;
            setUsers ( returnedUsers ) ;
            } ) ( );

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
                                <button
                                    onClick={(e) => edit(user.id, e)}
                                    type="button"
                                    className="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    style={{ color: "white", marginRight: "5px" }}
                                >
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </button>
                                <button
                                    onClick={(e) => delet(user.id, e)}
                                    className="btn btn-danger"
                                >
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="0"
                                name="amount"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                            <br/>
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="0"
                                name="amount"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                />
                            <br/>
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="0"
                                name="amount"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                />

                            <br/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={update} type="button" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Table
