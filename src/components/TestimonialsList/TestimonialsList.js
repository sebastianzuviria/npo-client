import React, { useState, useEffect } from 'react';
import apiGetService from '../../services/apiGetService';
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

    useEffect(() => {

        getTestimonials();

    },[])
    
    return(
        <div className="TestimonialsList__content">
            {
                testimonials.map(value => <TestimonialItem key={value.id} {...value} />)
            }
        </div>
    )
}
export default TestimonialsList;