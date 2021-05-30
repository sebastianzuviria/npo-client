import React,{useEffect,useState} from 'react'
import apiGetService from '../../services/apiGetService'
import apiDeleteService from '../../services/apiDeleteService'
import apiUpdateService from '../../services/apiUpdateService'
import { successAlert ,cancelAlert, confirmAlert } from '../Alert/Alert';
import NewsForm from '../NewsForm/NewsForm'

import { Modal, Button } from 'react-bootstrap'


const TableNovelties = () => {
    const [novelties, setNovelties] = useState([])
    const [newObject, setNewObject] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [noveltyToEdit, setNoveltyToEdit] = useState('')
    
    const edit = async (type, id) => {
        const returnedNovelty = await apiGetService(type, id);
        setNewObject(returnedNovelty)
    };
    const delet = async (type, id) => {
            const res = await confirmAlert();
            if(!res.isConfirmed){
                return await cancelAlert();
            }
            await apiDeleteService(type, id)
            let newNovelties = novelties.filter(novelty=>{
                return novelty.id !== id
            })
            setNovelties(newNovelties)
            return successAlert()
                       
    };
    const update = async () => {
        const res = await confirmAlert();
        if(res.isConfirmed){
                await apiUpdateService('news',newObject.id, newObject)
                setNovelties(novelties.map(novelty=>(novelty.id===newObject.id?newObject:novelty)))
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
                                        setIsModalOpen(!isModalOpen)
                                        setNoveltyToEdit(novelty.id)
                                    }}
                                    type="button"
                                    className="btn btn-info"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    style={{ color: "white", marginRight: "5px" }}
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
            <Modal size='lg' show={isModalOpen} onHide={() => setIsModalOpen(!isModalOpen)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewsForm id={noveltyToEdit} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TableNovelties
