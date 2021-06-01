import React, { useState } from 'react';
import ModalForm from './ModalForm';

const TestimonialsForm = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return(

        <div className="TestimonialsForms__content container">

            <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            
            <div className='d-flex justify-content-center my-4'>
                
                <button type="button" className="btn news__btn-more p-3 mb-5" onClick={() => setIsModalOpen(!isModalOpen)}> DEJA TU COMENTARIO </button>

            </div>

        </div>
    )   
}

export default TestimonialsForm;