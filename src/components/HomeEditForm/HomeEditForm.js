import React, { useEffect, useState } from 'react';
import EditSlides from './EditSlides/EditSlides';
import './HomeEditForm.css';
import mockData from './mockEditForm.js';
import { successAlert ,cancelAlert ,errorAlert, infoAlert, confirmAlert } from '../Alert/Alert';

const HomeEditForm = (props) => {
    
    const [currentData, setCurrentData] = useState(mockData);
    const [isModeEdit, setIsModeEdit] = useState(false);

    const handleOnChange = (e) => {
        setCurrentData({
            ...currentData,
            [e.target.name]: e.target.value
        })

    }
    const handleOnChangeSlides= (e, slide) => {
        
        setCurrentData({
            ...currentData,
            slides: currentData.slides.map((value) => value.id === slide.id ? {...slide, [e.target.name]: e.target.value} : value)
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(currentData.message.length < 20) return await infoAlert(`El texto de bienvenida debe contener al menos 20 caracteres`);
        
        await successAlert()
        
    }
      
    return(
        <form className="HomeEditForm__content" onSubmit={handleSubmit}>

            <div className="HomeEditForm__content-input">

                <label className="HomeEditForm__label-title">título de portada:
                    <input type="text" name="title" className="HomeEditForm__input-title" autoComplete="off" 
                        value={currentData.title} 
                        onChange={handleOnChange}
                    />
                </label>
            </div>

            <div className="HomeEditForm__content-input">

                <label className="HomeEditForm__label-message">Texto de bienvenida:
                    <textarea name="message" className="HomeEditForm__input-message" autoComplete="off" 
                        value={currentData.message} 
                        onChange={handleOnChange}
                    ></textarea>
                </label>
            </div>

            <div className="HomeEditForm__content-slides">
                
                {
                    currentData.slides?.map((value) => <EditSlides key={value.id} {...value} handleOnChangeSlides={(e) => handleOnChangeSlides(e,value)} />)
                }

            </div>
            <button type="submit">Guardar Cambios</button>
        </form>
    );
}

export default HomeEditForm;