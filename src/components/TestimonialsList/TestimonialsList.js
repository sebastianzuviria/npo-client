import React, { useState, useEffect } from 'react';
import {confirmAlert, successAlert} from '../Alert/Alert';
import apiGetService from '../../services/apiGetService';
import apiDeleteService from '../../services/apiDeleteService';
import TestimonialItem from './TestimonialItem';

const TestimonialsList = () => {

    const [testimonials, setTestimonials] = useState([]);

    const getTestimonials = async () => {
        try{
            const res = await apiGetService('testimonials');
            setTestimonials(res)
        }catch(err){
            console.log(err)
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
    
    // const handleCancel = () => {
    //     console.log('cancel')
    //     getTestimonials();

    // }

    useEffect(() => {

        getTestimonials();

    },[])

    
    return(
        <div className="TestimonialsList__content">

            {
                testimonials.map(value => <TestimonialItem key={value.id} {...value} 

                    deleteTestimonial={ () => deleteTestimonial(value.id) }
                    
                    
                    />
                    
                )
            }
        </div>
    )
}
export default TestimonialsList;