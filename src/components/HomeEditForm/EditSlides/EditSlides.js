import React from 'react';
import './EditSlides.css';

const EditSlides = ({url, text, handleOnChangeSlides}) => {
    
    return (

                <div className="EditSlides__content-img">

                    <img className="EditSlides__img" src={url} alt="images"/>

                    <div className="EditSlides__content-input">
                        <label htmlFor="url" className="EditSlides__label-url">URL:</label>
                        <input type="text" id="url" name="url" className="HomeEditForm__input-url" autoComplete="off"
                            value={url} 
                            onChange={handleOnChangeSlides}
                        />
                    </div>

                    <div className="EditSlides__content-input">
                        <label htmlFor="text" className="EditSlides__label-text" >Text:</label>
                        <input type="text" id="text" name="text" className="EditSlides__input-text" autoComplete="off"
                            value={text}
                            onChange={handleOnChangeSlides}
                        />
                    </div>
                </div>

    )
}

export default EditSlides;