import React from'react'
import { Formik , Form  } from 'formik' ;   
import * as Yup from 'yup';
import MyTextInput from './Textfield'

const SignupForm = () => {

    const initialValues={

        firstName: '',
        lastName: '',
        email: '',
        password:''
    }

    const validationSchema= Yup.object({

        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('The firstName field is required'),

        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('The last name field is required'),

        email: Yup.string()
          .email('Invalid email address')
          .required('The email field is required'),

        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required')
      })

      const onSubmit=(data)=>{
        /*Axios.post("http://localhost:4001/transactions/", data)
            .then((result) => {
                console.log('Registered User')

            })
            .catch((err) => {
              console.log("Sorry, unregistered user");
            });
        */
       console.log(data)
    }

    return (
      <>
        <h1>Subscribe!</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form >
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder=".."
            />
  
            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="..."
            />
  
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="..."
            />

            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="..."
            />

  
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </>
    );
  };


  export default SignupForm
