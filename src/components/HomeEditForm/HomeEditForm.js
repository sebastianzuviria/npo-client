import React, { useState } from 'react';
import EditSlides from './EditSlides/EditSlides';
import './HomeEditForm.css';
import mockData from './mockEditForm.js';

const HomeEditForm = (props) => {
    
    const [currentData, setCurrentData] = useState(mockData);
    // const [isEdit, setIsEdit] = useState(false);
    const handleOnChange = (e) => {

        setCurrentData({
            ...currentData,
            // name of input current : new data
            [e.target.name]: e.target.value
        })

    }
    
    return(
        <form className="HomeEditForm__content">

            <div className="HomeEditForm__content-input">

                <label for="title" className="HomeEditForm__label-title">titulo de portada</label>
                <input type="text" id="title" name="title" className="HomeEditForm__input-title" autoComplete="off" 
                    value={currentData.title} 
                    onChange={handleOnChange}
                />

            </div>

            <div className="HomeEditForm__content-input">

                <label for="message" className="HomeEditForm__label-message">Texto de bienvenida</label>

                <textarea id="message" name="message" className="HomeEditForm__input-message" autoComplete="off" 
                    value={currentData.message} 
                    onChange={handleOnChange}
                ></textarea>

            </div>

            <div className="HomeEditForm__content-slides">
                
                <EditSlides slides={currentData.slides} handleOnChange={handleOnChange}/>

            </div>

        </form>
    );
}

export default HomeEditForm;