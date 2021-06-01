import React, { useState, useEffect } from 'react';
import {confirmAlert, successAlert} from '../Alert/Alert';
import apiGetService from '../../services/apiGetService';
import apiDeleteService from '../../services/apiDeleteService';
import TestimonialItem from './TestimonialItem';
import Spinner from '../Spinner/Spinner';

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

                await apiDeleteService('testimonials', id)

                setTestimonials(testimonials.filter( value => value.id !== id))

                return await successAlert();
            }
            
        }catch(err){
            console.log(err)
        }
    }
    
    useEffect(() => {
        
        getTestimonials();
        
    },[])
    
    return(
        <div className="TestimonialsList__content container">
            
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
export default TestimonialsList;