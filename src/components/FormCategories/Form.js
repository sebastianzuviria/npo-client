import React,{useState,useEffect} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiPostService from '../../services/apiPostService';
import { Modal, Button } from 'react-bootstrap'

import {
    successAlert,
    cancelAlert,
    confirmAlert,
    errorAlert,
  } from "../Alert/Alert";

import './form.css';

const Form = ({setCategories}) => {
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit= async (e)=>{


        e.preventDefault();
        const objcategory = {
            name,
            description
        }
        try {
            const createdcategory = await apiPostService('categories', objcategory);  
            
            const info= {
                id:createdcategory.id,
                name:createdcategory.name,
                description:createdcategory.description
            }

            setCategories((prev) => {
                return [...prev, info]
              });    
            setName('')
            setdescription('')
            setIsModalOpen('')
            setIsModalOpen(false);    
            await successAlert(); 

        } catch (error) {
            setIsModalOpen(false);     
            errorAlert();
        }
    }
    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Button style={{ margin: '30px', backgroundColor: '#0dcaf0', border: 'none'}} onClick={()=> setIsModalOpen(!isModalOpen)}>Crear categría</Button>
        </div>

        <Modal size='lg' show={isModalOpen} onHide={() => setIsModalOpen(!isModalOpen)} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='form-Categories'>
                    <h2 className='text-center'>Create categoría</h2>
                    <form
                        onSubmit={handleSubmit}>
                            <label className='description-cat'>
                                Name
                                <input 
                                    className='input-cat'
                                    type="text"
                                    placeholder="Name" 
                                    value={name}
                                    onChange={(e)=>{setName(e.target.value)}}
                                />
                            </label>
                            <label className='description-cat'>
                                Description
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data={description}
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        setdescription(data)
                                    } }
                                />
                            </label>
                            <button className='button-category'>Crear categoría</button>
                    </form>
                </div>

            </Modal.Body>
        </Modal>
    </>
    )
}

export default Form

