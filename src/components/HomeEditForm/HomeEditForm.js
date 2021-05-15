import React, { useEffect, useState } from 'react';
import EditSlides from './EditSlides/EditSlides';
import './HomeEditForm.css';
import mockData from './mockEditForm.js';

const HomeEditForm = (props) => {
    
    const [currentData, setCurrentData] = useState(mockData);

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
      
    return(
        <form className="HomeEditForm__content">

            <div className="HomeEditForm__content-input">

                <label htmlFor="title" className="HomeEditForm__label-title">título de portada</label>
                <input type="text" id="title" name="title" className="HomeEditForm__input-title" autoComplete="off" 
                    value={currentData.title} 
                    onChange={handleOnChange}
                />

            </div>

            <div className="HomeEditForm__content-input">

                <label htmlFor="message" className="HomeEditForm__label-message">Texto de bienvenida</label>

                <textarea id="message" name="message" className="HomeEditForm__input-message" autoComplete="off" 
                    value={currentData.message} 
                    onChange={handleOnChange}
                ></textarea>

            </div>

            <div className="HomeEditForm__content-slides">
                
                {
                    currentData.slides.map((value) => <EditSlides key={value.id} {...value} handleOnChangeSlides={(e) => handleOnChangeSlides(e,value)} />)
                }

            </div>

        </form>
    );
}

export default HomeEditForm;