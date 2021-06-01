import React, { useState } from 'react';
import ModalForm from './ModalForm';

const TestimonialsForm = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return(

        <div className="TestimonialsForms__content container">

            <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            
            <div className='d-flex justify-content-center my-4'>
                
                <button type="button" className="btn btn-edit my-4" onClick={() => setIsModalOpen(!isModalOpen)}> Dejanos tu comentario </button>

            </div>

        </div>
    )   
}

export default TestimonialsForm;