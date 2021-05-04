import React, { useState, useEffect } from 'react'
import './Table.css'
import apiGetUsers from '../../services/apiGetService'
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
        // Axios.get(`http://localhost:3000/users/${id}`)
        //     .then(data => {
        //         setUserID(data.data.id)
        //         setFirstName(data.data.firstName)
        //         setLastName(data.data.lastName)
        //         setEmail(data.data.email)
        //     })
        //     .catch(err => { console.log(err) })
    };
    const update = () => {
        // swal({
        //     title: "Are you sure?",
        //     text: "An user is about to be updated",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        // }).then((willUpdate) => {
        //     if (willUpdate) {
        //         Axios.put(`http://localhost:3000/users/${userID}`, {firstName,lastName,email})
        //         swal("User has been updated!", {
        //             icon: "success",
        //         }).then(() => {
        //             window.location.reload();
        //         });
        //     } else {
        //         swal("User is safe!");
        //     }
        // });
    }
    const delet = (id) => {
        // swal({
        //     title: "Are you sure?",
        //     text: "An User is about to be deleted",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        // }).then((willDelete) => {
        //     if (willDelete) {
        //         Axios.delete(`http://localhost:3000/users/${id}`);
        //         swal("User has been deleted!", {
        //             icon: "success",
        //         }).then(() => {
        //             window.location.reload();
        //         });
        //     } else {
        //         swal("User is safe!");
        //     }
        // });
    };
    useEffect(() => {
        apiGetUsers('users')
        .then(data=>{
            setUsers(data)
            console.log(data);
        })
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
