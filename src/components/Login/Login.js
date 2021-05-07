import React, { useEffect} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import { userLogin } from '../../slices/userSlice';
import apiGetService from '../../services/apiGetService';
import apiPostService from '../../services/apiPostService';
import { useHistory } from 'react-router-dom';
import { errorAlert, successAlert } from '../Alert/Alert';
import './Login.css';

const Login = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const initialValues = {
        email:'',
        password:''
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email('Please enter valid email')
        .required('Required'),
        password: Yup.string()
        .min(6, 'The password must be at least 6 characters')
        .required('Required')
    });

    const handleSubmit = async ( values ) => {

            try {

                const authResponse = await apiPostService('auth/login', values);
                dispatch( userLogin( authResponse ) );
                history.push('/');  
                
            } catch (err) {
    
                await errorAlert();
            }

    }

    useEffect( () => {
        
        // Check user against localStorage
        const { id }  = JSON.parse( localStorage.getItem('ongLoggedUser') ) || '';

        if ( id ) {

            try {

                // Check user against DB
                const logged  = async () => await apiGetService('users/auth/me', id );
                ( logged ) && history.push('/profile');
                
            } catch (error) {

                errorAlert();

            }

            
        }
        
    }, [ history] );

    return (
        <div className="d-flex justify-content-center align-items-center divF-form">
            <Formik 
                initialValues={initialValues} 
                onSubmit={ handleSubmit } 
                validationSchema={validationSchema}
            >
                {({errors, touched})=>(
                    <Form>
                        <div className="form-login">
                            <h2 className="text-center mb-4">Sign In</h2>
                            <Field 
                                className="form-control" 
                                type="email" 
                                placeholder="Email *" 
                                name="email"
                            />
                            {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
                            <br/>
                            <Field 
                                className="form-control" 
                                type="password" 
                                placeholder="Password *" 
                                name="password"
                            />
                            {errors.password && touched.password ? <div className="error-message">{errors.password}</div> : null}
                            <br/>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary mb-3" type='submit'>Sign In</button>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary" type='submit'>Register</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login
