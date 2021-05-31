import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiGetService from '../../services/apiGetService';
import apiDeleteService from '../../services/apiDeleteService';
import { successAlert, confirmAlert } from '../Alert/Alert';
import TestimonialItem from './TestimonialItem';
import Spinner from '../Spinner/Spinner';
import { useSelector } from 'react-redux';
import { userLogged } from '../../slices/userSlice';
import ModalForm from './ModalForm';

const TestimonialsForm = () => {

    const currentUser = useSelector( userLogged );

    const [testimonials, setTestimonials] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const getTestimonios = async () => {

        try{

            const res =  await apiGetService('testimonials');

            setTestimonials(res.filter(value => value.userId === currentUser.id))

        }catch(err){

            console.log('error: ', err);

        }
    }
    
    const deleteTestimonial = async (id) => {
        
        try{
            const confirm = await confirmAlert();
            
            if(confirm.isConfirmed) {

                const res = await apiDeleteService('testimonials', id)

                setTestimonials(testimonials.filter( value => value.id !== id))

                return await successAlert();
            }
            
        }catch(err){
            console.log(err)
        }
    }
    const handleCreation = () => {

        setIsModalOpen(!isModalOpen);

    }
    
    useEffect(() => {

        getTestimonios();

    }, [])

    return(
        <div className="TestimonialsForms__content container">

            <div className='d-flex justify-content-center my-4'>

                <button type="button" className="btn btn-primary my-4" onClick={() => handleCreation()}> NUEVO TESTIMONIO </button>

            </div>

            <ModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} 
                currentUserId={currentUser.id} 
                testimonials={testimonials} 
                setTestimonials={setTestimonials}
            />
            
        {
            
        testimonials.length === 0 ? <Spinner/> : (
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    testimonials?.map(value => <TestimonialItem key={value.id} {...value}

                        deleteTestimonial={ () => deleteTestimonial(value.id) }
                        
                        />
                        
                    )
                }
                </tbody>
            </table>
        )
        }
        
    </div>
    )   
}

export default TestimonialsForm;