import React, { useEffect, useState } from 'react';
import { successAlert, errorAlert } from '../Alert/Alert';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import apiGetService from '../../services/apiGetService';
import apiUpdateService from '../../services/apiUpdateService';
import './HomeEditForm.css';
import InputField from '../SignupForm/InputField';

const HomeEditForm = () => {
    const [welcomeState, setWelcomeState] = useState();
    const [ slideState, setSlideState ] = useState();
    const [ imageState, setImageState ] = useState();

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
        formData.append('text', data.text); 

    const config = {
        headers:{'Content-Type':'multipart/form-data'}
    }

        // try {

        //     await apiUpdateService(`organizations`, welcomeState.id,  data );
        //     await successAlert();

        // } catch (err) {

        //     await errorAlert();

        // }
    };

    return (
        <div className='container my-5'>
            <h3>Editar Página de Inicio</h3>
            <hr className='mb-5' />
            <div className='card'>
                <div className='card-header py-3'>Texto de Bienvenida</div>
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
                    <Formik
                        validationSchema={editHomeSchema}
                        onSubmit={handleSubmitSlides}
                    >
                        <div>
                            <div className='row row-cols-1 row-cols-md-3 g-4'>
                                {slideState &&
                                    slideState.map(({ id, imageUrl, text }) => {
                                        return (
                                            <Form>
                                                <div
                                                    className='col form-group border-0'
                                                    key={id}
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
                                                            required
                                                        />
                                                        <input
                                                            type='hidden'
                                                            name='id'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='input-group mb-3'>
                                                    <input type='text' className='form-control'/>
                                                    </div>
                                                <hr />
                                                <div className='d-flex justify-content-center'>
                                                    <button
                                                        className='btn HomeEditForm__btn my-3'
                                                        type='submit'
                                                    >
                                                        Actualizar
                                                    </button>
                                                </div>
                                            </Form>
                                        );
                                    })}
                            </div>
                        </div>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default HomeEditForm;
