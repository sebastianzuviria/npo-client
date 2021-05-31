import React, { useEffect, useState } from 'react';
import { successAlert, errorAlert } from '../Alert/Alert';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import apiGetService from '../../services/apiGetService';
import apiUpdateService from '../../services/apiUpdateService';
import './HomeEditForm.css';

const HomeEditForm = () => {
    
    const [ welcomeState, setWelcomeState ] = useState();
    const [ slideState, setSlideState ] = useState();
    
    // Here we bring organization data from DB
    useEffect(() => {

        (async () => {

            const welcomeResponse = await apiGetService('organizations/public');
            const slideResponse = await apiGetService('slides', welcomeResponse.id);

            setWelcomeState(welcomeResponse);
            setSlideState(slideResponse);

        })()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const editHomeSchema = Yup.object().shape({

        welcomeText: Yup.string()
            .min(50, '¡El texo es demasiado corto!')

    });

    const handleSubmit = async ( values ) => {

        try {
        
            await apiUpdateService(`organizations`, welcomeState.id,  values );
            await successAlert();

        } catch (err) {

            await errorAlert();

        }
        
    }
    
    return(
        <div className='container my-4'>
            <h3>Editar Página de Inicio</h3>
            <Formik
                enableReinitialize={ true }
                initialValues={ welcomeState }
                validationSchema={ editHomeSchema }
                onSubmit={ handleSubmit }
            >
                <Form>
                    <div className='mb-3'>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlTextarea1'>Example textarea</label>
                            <textarea className='form-control' name='welcomeText' rows='3'></textarea>
                        </div>
                        {
                            slideState && slideState.map( ( { id, imageUrl, text } ) => {
                                return ( 
                                
                                    <div className='form-group' key={ id }>
                                        <img className='img-thumbnail w-25' src={ imageUrl } alt={ text }/> 
                                        <input type='file' className='form-control-file border-0' id='exampleFormControlFile1' />
                                    </div>

                                )
                            } )
                        }
                    </div>
                    <button className='btn HomeEditForm__btn' type='submit'>
                        Actualizar
                    </button>
                </Form>
            </Formik>
        </div>
        
        // <form className='HomeEditForm__content' onSubmit={handleSubmit}>

        //     <div className='HomeEditForm__content-input'>

        //         <label className='HomeEditForm__label-title'>título de portada:
        //             <input type='text' name='title' className='HomeEditForm__input-title' autoComplete='off' 
        //                 value={currentData.title} 
        //                 onChange={handleOnChange}
        //             />
        //         </label>
        //     </div>

        //     <div className='HomeEditForm__content-input'>

        //         <label className='HomeEditForm__label-message'>Texto de bienvenida:
        //             <textarea name='message' className='HomeEditForm__input-message' autoComplete='off' 
        //                 value={currentData.message} 
        //                 onChange={handleOnChange}
        //             ></textarea>
        //         </label>
        //     </div>

        //     <div className='HomeEditForm__content-slides'>
                
        //         {
        //             currentData.slides?.map((value) => <EditSlides key={value.id} {...value} handleOnChangeSlides={(e) => handleOnChangeSlides(e,value)} />)
        //         }

        //     </div>
        //     <button className='HomeEditForm__button' type='submit'>Guardar Cambios</button>
        // </form>
    );
}

export default HomeEditForm;