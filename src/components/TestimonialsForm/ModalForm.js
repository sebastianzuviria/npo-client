import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import apiPostService from '../../services/apiPostService';
import { successAlert } from '../Alert/Alert';

const ModalForm = ( { isModalOpen, setIsModalOpen} ) => {

    const [testimonial, setTestimonial] = useState({});

    const handleOnChange = e => {

        setTestimonial({
            ...testimonial,
            [e.target.name] : e.target.value
        })
        
    }
    const handleSubmit = async _ => {
        
        try{

            await apiPostService('testimonials', testimonial)
            
            await successAlert();
            
            setIsModalOpen(false);
            
        }catch(err){
            console.log('Error: ', err);
        }
    }
    return(<Modal show={isModalOpen} onHide={() => setIsModalOpen(!isModalOpen)} animation={false} >

    <Form className="d-flex flex-direction: row px-5" onSubmit={e => e.preventDefault()}>

            <Modal.Header>
                <Modal.Title>Crear Testimonio</Modal.Title>
            </Modal.Header>

            <Form.Group className="mb-3" controlId="name">

                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="ingresar nombre" name="name" autoComplete="off" onChange={handleOnChange}/>
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">

                <Form.Label>Historia</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Contanos tu testimonio" name="content" autoComplete="off" onChange={handleOnChange}/>
                
            </Form.Group>
                
        </Form>
        <Modal.Footer>

            <button type="button" className="fa fa-user-edit btn btn-edit " onClick={ () => handleSubmit() }> Guardar Cambios </button>
            <button type="button" className="btn btn-secondary" onClick={ () => setIsModalOpen(!isModalOpen)}> Cancelar </button>

    </Modal.Footer>
        
</Modal>)

}
export default ModalForm;