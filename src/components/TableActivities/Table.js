import React, { useState, useEffect } from 'react'
import apiGet from '../../services/apiGetService'

const Table = () => {
    const [activities, setActivities] = useState([]);
    const [nameActivity, setNameActivity] = useState('');
    const [contentActivity, setContentActivity] = useState('');

    const edit = (id) => {

        (async(type, ide) => {
            const returnedActivity = await apiGet(type, ide);
            console.log(returnedActivity);
            setNameActivity(returnedActivity[0].name)
            setContentActivity(returnedActivity[0].content)
        })('activities', id);
        
    };
    const update = () => {
        //
    }
    const delet = (id) => {
        //
    };

    useEffect(() => {
        
        (async() => {
            const returnedActivities = await apiGet('activities');
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
                                        onClick={(e) => edit(act.id, e)}
                                        type="button"
                                        className="btn btn-info"
                                        data-toggle="modal"
                                        data-target="#exampleModal"
                                        style={{ color: "white", marginRight: "5px" }}
                                    >
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </button>
                                    <button
                                        onClick={(e) => delet(act.id, e)}
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
                                placeholder="0"
                                name="amount"
                                value={nameActivity}
                                onChange={(e) => {
                                    setNameActivity(e.target.value);
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
