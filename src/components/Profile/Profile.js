import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert';
import {useDispatch} from 'react-redux';
import { userLogout } from '../../slices/userSlice';
import { useHistory } from 'react-router-dom';
import apiGetService from '../../services/apiGetService';
import { confirmAlert, errorAlert } from '../Alert/Alert';
import './Profile.css';

const Profile = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    let deleteA=(id)=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                /* aca debe estar la logica que elimina la cuenta */
                swal("Your account has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your account is safe!");
            }
          });
    }

    const initialValues ={
        name:'',
        lastName:'',
        email:''
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string()
        .required('Requiered'),
        lastName: Yup.string()
        .required('Requiered'),
        email: Yup.string()
        .email('Please enter valid email')
        .required('Required'),
    })
    const onSubmit=(values)=>{
        /* aca debe estar la logica del inicio de sesion */
        console.log(values);
    }

    const checkAndRedirect =  () => {

        const { id }  = JSON.parse( localStorage.getItem('ongLoggedUser') ) || '';

        if (!id)  {

            history.push('/login');

        } else {

            try {

                const logged  = async () => await apiGetService('auth/me', id );
                ( !logged ) && history.push('/login');
                
            } catch (err) {
                
                errorAlert();

            }

        }

    }

    const handleLogout = async () => {

        const confirmLogout = await confirmAlert();

        if ( confirmLogout.isConfirmed ) {

        dispatch( userLogout() );
        checkAndRedirect();

        }
    }

    useEffect(() => {
        
        checkAndRedirect();

    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center h-max">
            <div className="form-container-box">
                <Formik
                initialValues={initialValues} 
                onSubmit={onSubmit} 
                validationSchema={validationSchema}
                >
                    {({errors, touched})=>(
                        <Form>
                            <h2 className="text-center">Profile</h2>
                            <Field 
                                className="form-control" 
                                placeholder="Name" 
                                type="text" 
                                name="name"
                            />
                            {errors.name && touched.name ? <div className="error-message">{errors.name}</div> : null}
                            <br/>
                            <Field 
                                className="form-control" 
                                placeholder="Last Name" 
                                type="text" 
                                name="lastName"
                            />
                            {errors.lastName && touched.lastName ? <div className="error-message">{errors.lastName}</div> : null}
                            <br/>
                            <Field 
                                className="form-control" 
                                placeholder=" Email"
                                type="text" 
                                name="email"
                            />
                            {errors.email && touched.email ? <div className="error-message">{errors.email}</div> : null}
                            <br/>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary" type="submit">Save changes</button>
                            </div>
                            <br/>
                        </Form>
                    )}
                </Formik>
                            <div className="d-flex justify-content-center">
                                <button 
                                    className="btn btn-danger" 
                                    onClick={(e) => deleteA(1, e)}
                                >Delete Account</button>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button 
                                    className='btn btn-warning mt-4'
                                    onClick={ handleLogout }
                                >
                                    Logout
                                </button>
                            </div>
                            
            </div>
        </div>
    )
}

export default Profile
