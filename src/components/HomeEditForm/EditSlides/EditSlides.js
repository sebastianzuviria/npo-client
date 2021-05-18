import React from 'react';
import './EditSlides.css';

const EditSlides = ({url, text, handleOnChangeSlides}) => {
    
    return (

                <div className="EditSlides__content-img">

                    <img className="EditSlides__img" src={url} alt="images"/>

                    <div className="EditSlides__content-input">
                        <label className="EditSlides__label-url">URL:
                            <input type="text" name="url" className="HomeEditForm__input-url" autoComplete="off"
                                value={url} 
                                onChange={handleOnChangeSlides}
                            />
                        </label>
                    </div>

                    <div className="EditSlides__content-input">
                        <label className="EditSlides__label-text" >Descripción que se mostrará con la imagen:
                            <input type="text" name="text" className="EditSlides__input-text" autoComplete="off"
                                value={text}
                                onChange={handleOnChangeSlides}
                            />
                        </label>
                    </div>
                </div>

    )
}

export default EditSlides;