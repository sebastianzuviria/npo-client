import React from 'react';
import { ErrorMessage, useField } from 'formik';

const InputField = ({ label, ...props }) => {
  //useField is a custom React hook that will automagically help you hook up inputs to Formik
  const [field] = useField(props);

  return (
    <div className="form-floating mt-4">
      <input {...field} {...props} className="form-control" />
      <label htmlFor={props.id || props.name}>{label}</label>
      <ErrorMessage
        name={field.name}
        className="invalid-feedback ml-2 d-block"
        component="div"
      />
    </div>
  );
};

export default InputField;
