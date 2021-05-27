import React, { useState, useEffect } from 'react'
import './Table.css'
import apiGetService from '../../services/apiGetService'
import apiDeleteService from '../../services/apiDeleteService'
import apiUpdateService from '../../services/apiUpdateService'
import { successAlert ,cancelAlert, confirmAlert } from '../Alert/Alert';


const Table = () => {
    const [users, setUsers] = useState([])
    const [newObject, setNewObject] = useState({})
    console.log(newObject[0]);

    const edit = async (type, id) => {
            const returnedUser = await apiGetService(type, id);
            setNewObject(returnedUser[0])
    };
    const update = async () => {
        const res = await confirmAlert();
        if(res.isConfirmed){
            await apiUpdateService('users',newObject.id, newObject)
            setUsers(users.map(user=>(user.id===newObject.id?newObject:user)))
            return successAlert()
        } else{
            cancelAlert();
        }
    }
    const delet = async (type, id) => {
        const res = await confirmAlert();
            if(res.isConfirmed){
                await apiDeleteService(type, id)
                return successAlert().then(()=>{
                    let newUser = users.filter(user=>{
                        return user.id !== id
                    })
                    setUsers(newUser)
                })
            } else{
                cancelAlert();
            }
    };
    useEffect(() => {

        ( async ( ) => {
            const returnedUsers = await apiGetService('users') ;
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
                                    onClick={() => edit('users',user.id)}
                                    type="button"
                                    className="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    style={{ color: "white", marginRight: "5px" }}
                                >
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </button>
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
                                name="name"
                                value={newObject.name}
                                onChange={(e) => {
                                    setNewObject({...newObject, [e.target.name]:e.target.value})
                                }}
                            />
                            <br/>
                            <label className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={newObject.lastName}
                                onChange={(e) => {
                                    setNewObject({...newObject, [e.target.name]:e.target.value})
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
