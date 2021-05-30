import React, { useState } from 'react';
import apiGetService from '../../../services/apiGetService';
import apiUpdateService from '../../../services/apiUpdateService';
import { successAlert } from '../../Alert/Alert';
import { Modal, Form, Button } from 'react-bootstrap';

const TestimonialItem = ({id, name, content, deleteTestimonial}) => {
    
    const [testimonial, setTestimonial] = useState({id, name, content});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOnChange = e => {

        setTestimonial({
            ...testimonial,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = async _ => {

        try{
            const res = await apiUpdateService('testimonials', id, testimonial)

            if(res){

                await successAlert();
                
            }
            setIsModalOpen(false);

        }catch(err){
            console.log(err)
        }

    }

    const handleCancel = async (id) => {

        try{

            const res = await apiGetService('testimonials', id);
            setTestimonial(res)
            setIsModalOpen(false)
        }catch(err){
            console.log(err)
        }

    }
    
        return(<>
            <tr>
                <td>{testimonial.name}</td>
                <td>
                    <button style={{cursor:"pointer"}} 
                        type="button" className="btn btn-info mr-1"
                        onClick={ () => setIsModalOpen(!isModalOpen) } >
                        <i className="fa fa-pencil" ></i>
                    </button>
                    <button style={{cursor:"pointer"}}
                        type="button" className="btn btn-danger"
                        onClick={deleteTestimonial} >
                        <i className="fas fa-trash-alt" ></i>
                    </button>
                </td>
            </tr>
            
            <Modal show={isModalOpen} onHide={() => handleCancel(id)} animation={false} >

                <Form className="d-flex flex-direction: row px-5" >

                        <Modal.Header>
                            <Modal.Title>Edición</Modal.Title>
                        </Modal.Header>

                        <Form.Group className="mb-3" controlId="name">

                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="nombre" name="name" autoComplete="off" value={ testimonial.name } onChange={handleOnChange}/>
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="content">

                            <Form.Label>Historia</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Contanos tu testimonio" name="content" autoComplete="off" value={ testimonial.content } onChange={handleOnChange}/>
                            
                        </Form.Group>
                            
                    </Form>
                    <Modal.Footer>

                        <Button variant="primary" type="button" onClick={() => handleSubmit() }> Guardar Cambios </Button>

                        <Button variant="secondary" type="button" onClick = { () => handleCancel(id) } > Cancelar </Button>

                </Modal.Footer>
                    
                
                
            </Modal>
            
        </>)
}
export default TestimonialItem;