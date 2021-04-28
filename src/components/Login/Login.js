import React from 'react'
import './Login.css'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

const Login = () => {
    const initialValues ={
        email:'',
        password:''
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email('Please enter valid email')
        .required('Required'),
        password: Yup.string()
        .min(6, 'The password must be at least 6 characters')
        .required('Requiered')
    })
    const onSubmit=(values)=>{
        console.log(values);
    }
    return (
        <div className="d-flex justify-content-center align-items-center divF-form">
            <Formik 
                initialValues={initialValues} 
                onSubmit={onSubmit} 
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
