import React from'react'
import { ErrorMessage,useField } from 'formik' ;  

const MyTextInput = ({ label, ...props }) => {
    //useField is a custom React hook that will automagically help you hook up inputs to Formik
    const [field, meta]=useField(props);

    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input {...field} {...props}  />
        <ErrorMessage name={field.name} component="div" />

      </>
    );
  };

export default MyTextInput