import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import apiPostService from '../../services/apiPostService';
import { successAlert } from '../Alert/Alert';

const ModalForm = ( { isModalOpen, setIsModalOpen, currentUserId, testimonials, setTestimonials} ) => {

    const [testimonial, setTestimonial] = useState({});

    const handleOnChange = e => {

        setTestimonial({
            ...testimonial,
            [e.target.name] : e.target.value
        })
        
    }
    const handleSubmit = async _ => {
        
        try{

            const {id, name, content, userId, user} = await apiPostService('testimonials', {...testimonial, id: currentUserId})
            
            await successAlert();
            setTestimonials([...testimonials, {id, name, content, userId, user}]);
            setIsModalOpen(false);
            
        }catch(err){
            console.log('Error: ', err);
        }
    }
    return(<Modal show={isModalOpen} onHide={() => setIsModalOpen(!isModalOpen)} animation={false} >

    <Form className="d-flex flex-direction: row px-5" onSubmit={e => e.preventDefault()}>

            <Modal.Header>
                <Modal.Title>Edición</Modal.Title>
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

            <Button variant="primary" type="button" onClick={() => handleSubmit() }> Guardar Cambios </Button>

            <Button variant="secondary" type="button" onClick = { () => setIsModalOpen(!isModalOpen) } > Cancelar </Button>

    </Modal.Footer>
        
</Modal>)

}
export default ModalForm;