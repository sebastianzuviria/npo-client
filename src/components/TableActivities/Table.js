import React, { useState, useEffect } from 'react'
import apiGetService from '../../services/apiGetService'
import apiDeleteService from '../../services/apiDeleteService'
import apiUpdateService from '../../services/apiUpdateService'
import { successAlert ,cancelAlert, confirmAlert } from '../Alert/Alert';

const Table = () => {
    const [activities, setActivities] = useState([]);
    const [newObject, setNewObject] = useState({})
    console.log(newObject);

    const edit = async (type,id) => {
        const returnedActivity = await apiGetService(type, id);
        setNewObject(returnedActivity)
    };
    const update = async () => {
        const res = await confirmAlert();
        if(res.isConfirmed){
                await apiUpdateService('activities',newObject.id, newObject)
                setActivities(activities.map(activity=>(activity.id===newObject.id?newObject:activity)))
            return successAlert()
        } else{
            cancelAlert();
        }
    }
    const delet = async (type, id) => {
        const res = await confirmAlert();
        if(!res.isConfirmed){
            return await cancelAlert();
        }
        const deleted = await apiDeleteService(type, id)
        if (deleted) {
            let newActivity = activities.filter(activity=>{
                return activity.id !== id
            })
            setActivities(newActivity)
            return successAlert();
        }
    };

    useEffect(() => {
        
        (async() => {
            const returnedActivities = await apiGetService('activities');
            setActivities ( returnedActivities ) ;
        })();

    }, [])
    return (
        <div className="container">
            <table className="table table-bordered table-light">
                <thead>
                    <tr>
                        <th scope="col">Name Activity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        activities.map((act,i)=>(
                            <tr key={i}>
                                <td>{act.name}</td>
                                <td>
                                    <button
                                        onClick={() => edit('activities',act.id)}
                                        type="button"
                                        className="btn btn-info"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        style={{ color: "white", marginRight: "5px" }}
                                    >
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </button>
                                    <button
                                        onClick={() => delet('activities',act.id)}
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
                            <label className="form-label">Name Activity</label>
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
