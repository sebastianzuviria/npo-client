import React, { useEffect, useState } from 'react';
import { successAlert, errorAlert } from '../Alert/Alert';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import apiGetService from '../../services/apiGetService';
import apiUpdateService from '../../services/apiUpdateService';
import './HomeEditForm.css';

const HomeEditForm = () => {
    const [welcomeState, setWelcomeState] = useState();
    const [ slideState, setSlideState ] = useState();

    // Here we bring organization data from DB
    useEffect(() => {
        (async () => {
            const welcomeResponse = await apiGetService('organizations/public');
            const slideResponse = await apiGetService(
                'slides',
                welcomeResponse.id
            );

            setWelcomeState(welcomeResponse);
            setSlideState(slideResponse);
        })();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const editHomeSchema = Yup.object().shape({
        welcomeText: Yup.string().min(50, '¡El texo es demasiado corto!'),
    });

    const handleSubmitWelcome = async (values) => {
        try {
            await apiUpdateService(`organizations`, welcomeState.id, values);
            await successAlert();
        } catch (err) {
            await errorAlert();
        }
    };

    const handleSubmitSlides = async (data) => {
        
        const formData = new FormData();
        
        formData.append('image', data.image);
        formData.append('imageUrl', data.imageUrl);
        formData.append('order', data.order);
        formData.append('text', data.text); 

        for (let pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }

    const config = {
        headers: { 'Content-Type' : 'multipart/form-data' }
    }

        try {

            await apiUpdateService(`slides`, data.id,  formData, config );
            await successAlert();

        } catch (err) {

            await errorAlert();

        }
    };

    return (
        <div className='container my-5'>
            <h3>Editar Página de Inicio</h3>
            <hr className='mb-5' />
            <div className='card'>
                <div className='card-header py-3'>
                    <h5 className='mb-0'>Texto de Bienvenida</h5>
                    <small className='mt-0 text-muted'>Se muestra al inicio, a modo de información inicial</small>
                </div>
                <div className='card-body'>
                    <Formik
                        enableReinitialize={true}
                        initialValues={welcomeState}
                        validationSchema={editHomeSchema}
                        onSubmit={handleSubmitWelcome}
                    >
                        <Form>
                            <div className='my-3'>
                                <div className='form-group'>
                                    <Field
                                        as='textarea'
                                        className='form-control border-0 border-bottom'
                                        name='welcomeText'
                                        rows='2'
                                    ></Field>
                                    <ErrorMessage
                                        name='welcomeText'
                                        className='invalid-feedback ml-2 d-block'
                                        component='div'
                                    />
                                </div>
                            </div>
                            <button
                                className='btn HomeEditForm__btn my-3'
                                type='submit'
                            >
                                Actualizar
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
            <div className='card my-5'>
                <div className='card-header py-3'>Imágenes de Presentación</div>
                <div className='card-body'>
                        <div>
                            <div className='row row-cols-1 row-cols-md-3 g-4'>
                                {slideState &&
                                    slideState.map(({ id, imageUrl, order, text }) => {
                                        return (
                                            <Formik
                                                enableReinitialize={true}
                                                initialValues={ { id, order, imageUrl, text } }
                                                validationSchema={editHomeSchema}
                                                onSubmit={handleSubmitSlides}
                                                key={id}
                                            >
                                                { props  => ( 
                                                    <Form>
                                                        <div
                                                            className='col form-group border-0'
                                                        >
                                                            
                                                            <div>
                                                                <img
                                                                    className='img-fluid'
                                                                    src={imageUrl}
                                                                    alt={text}
                                                                />
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type='file'
                                                                    className='form-control-file border-0 mt-3 shadow-none text-center'
                                                                    name='image'
                                                                    onChange={(event) => {
                                                                        props.setFieldValue('image', event.currentTarget.files[0]);
                                                                    }}
                                                                    required
                                                                />
                                                                <input
                                                                    type='hidden'
                                                                    name='imageUrl'
                                                                />
                                                                <input
                                                                    type='hidden'
                                                                    name='order'
                                                                />
                                                                <input
                                                                    type='hidden'
                                                                    name='id'
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='form-group mb-3 text-center'>
                                                            <Field className='form-control border-0 border-bottom shadow-none my-2' name='text'/>
                                                        </div>
                                                        <div className='d-flex justify-content-center'>
                                                            <button
                                                                className='btn HomeEditForm__btn my-3'
                                                                type='submit'
                                                            >
                                                                Actualizar
                                                            </button>
                                                        </div>
                                                    </Form> 
                                                ) } 
                                            </Formik>
                                        );
                                    })}
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default HomeEditForm;
