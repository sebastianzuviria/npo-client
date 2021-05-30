import React, { useEffect, useState } from 'react';
import { successAlert, errorAlert } from '../Alert/Alert';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import apiGetService from '../../services/apiGetService';
import apiUpdateService from '../../services/apiUpdateService';
import InputField from '../SignupForm/InputField';
import './HomeEditForm.css';

const HomeEditForm = () => {
    
    const [ { id, welcomeText }, setHomeState ] = useState({ id: '', welcomeText: '' });
    
    // Here we bring organization data from DB
    useEffect(() => {

        (async () => {

            const { id, welcomeText } = await apiGetService('organizations/public');
            setHomeState({
                id,
                welcomeText
            });

        })()

        
    }, []);

    const editHomeSchema = Yup.object().shape({

        welcomeText: Yup.string()
            .min(50, '¡El texo es demasiado corto!')

    });

    const handleSubmit = async ( values ) => {

        try {
        
            await apiUpdateService(`organizations`, id,  values );
            await successAlert();

        } catch (err) {

            await errorAlert();

        }
        
    }
    
    return(
        <div className='container mt-4'>
            <h3>Editar Página de Inicio</h3>
            <Formik
                enableReinitialize={ true }
                initialValues={{ welcomeText }}
                validationSchema={ editHomeSchema }
                onSubmit={ handleSubmit }
            >
                <Form>
                    <div className='mb-3'>
                        <InputField label='Texto de Bienvenida' type='text' className='form-control' name='welcomeText' />
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