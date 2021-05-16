import React,{useEffect,useState} from 'react'
import apiGetService from '../../services/apiGetService'
import apiDeleteService from '../../services/apiDeleteService'
import apiUpdateService from '../../services/apiUpdateService'
import { successAlert ,cancelAlert, confirmAlert } from '../Alert/Alert';

const TableNovelties = () => {
    const [novelties, setNovelties] = useState([])
    const [newObject, setNewObject] = useState({})
    console.log(novelties);
    
    const edit = (id) => {
        (async (type, id) => {
            const returnedNovelty = await apiGetService(type, id) ;
            setNewObject(returnedNovelty)
        }) ('news', id);
    };
    const delet = async (id) => {
            const res = await confirmAlert();
            if(res.isConfirmed){
                (async (type, id) => {
                    await apiDeleteService(type, id)
                }) ('news', id);
                return successAlert().then(()=>{
                    let newNovelties = novelties.filter(novelty=>{
                        return novelty.id !== id
                    })
                    setNovelties(newNovelties)
                })
            } else{
                cancelAlert();
            }
        
    };
    const update = async () => {
        const res = await confirmAlert();
        if(res.isConfirmed){
            (async () => {
                await apiUpdateService('news',newObject.id, newObject)
                setNovelties(novelties.map(novelty=>(novelty.id===newObject.id?newObject:novelty)))
            }) ();
            return successAlert()
        } else{
            cancelAlert();
        }
    }

    useEffect(() => {
        (async (type) => {
            const returnedNovelties = await apiGetService(type) ;
            setNovelties ( returnedNovelties ) ;
            })('news');
    }, [])
    return (
        <div className='d-flex justify-content-center'>
            <table className="table table-bordered table-hw">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">CreatedAt</th>
                        <th scope="col">Actions</th>
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
                                    onClick={(e) => edit(novelty.id, e)}
                                    type="button"
                                    className="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    style={{ color: "white", marginRight: "5px" }}
                                >
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </button>
                                <button
                                    onClick={(e) => delet(novelty.id, e)}
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
                            <h5 className="modal-title" id="exampleModalLabel">Edit Novelty</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="title"
                                value={newObject.title}
                                onChange={(e) => {
                                    setNewObject({...newObject, [e.target.name]:e.target.value})
                                }}
                            />
                            <br/>
                            <label className="form-label">Image</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="image"
                                value={newObject.image}
                                onChange={(e) => {
                                    setNewObject({...newObject, [e.target.name]:e.target.value})
                                }}
                                />
                            <br/>
                            <label className="form-label">Content</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="content"
                                value={newObject.content}
                                onChange={(e) => {
                                    setNewObject({...newObject, [e.target.name]:e.target.value})
                                }}
                                />
                            <br/>
                            <label className="form-label">Created At</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder=""
                                name="createdAt"
                                value={newObject.createdAt}
                                onChange={(e) => {
                                    setNewObject({...newObject, [e.target.name]:e.target.value})
                                }}
                                />

                            <br/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={update} type="button" className="btn btn-primary" data-dismiss="modal">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableNovelties
