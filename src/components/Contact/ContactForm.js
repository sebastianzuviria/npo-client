import React, { useState } from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import apiPostService from '../../services/apiPostService';
import { errorAlert, successAlert } from '../Alert/Alert';

const initialValues = { name: '', email: '', message: '' };

const validateFields = (values) => {
  const errors = {};

  //Email validation
  if (!values.email) {
    errors.email = 'Correo electrónico requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Dirección inválida';
  }

  //Name validation
  if (!values.name) {
    errors.name = 'Nombre requerido';
  } else if (!/^[A-Za-z\s]+$/.test(values.name)) {
    errors.name = 'Este campo solo admite letras';
  } else if (values.name.length < 5) {
    errors.name = 'Debe contener un mínimo de 5 caracteres';
  }

  //Message validation
  if (!values.message) {
    errors.message = 'Mensaje requerido';
  } else if (values.message.length < 10) {
    errors.message = 'Debe contener un mínimo de 10 caracteres';
  }
  return errors;
};

const ContactForm = () => {
  const [phone, setPhone] = useState();
  const handlePhone = (value) => setPhone(value);

  const handleSubmit = async (values, actions) => {
    try {
      const contactObject = { ...values, phone };
      const newContact = await apiPostService('contacts', contactObject);
      if (newContact) successAlert();
      actions.setSubmitting(false);
    } catch (err) {
      actions.setSubmitting(false);
      errorAlert();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateFields}
      >
        {({ isSubmitting }) => (
          <Form className="border border-dark p-3 rounded">
            <h2 className="h2">Envianos tu mensaje</h2>
            <div className="form-group text-left">
              <label htmlFor="name" className="text-left">
                Nombre
              </label>
              <Field
                className="form-control"
                id="name"
                name="name"
                type="text"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="alert alert-danger h6 mt-2"
              />
            </div>
            <div className="form-group text-left">
              <label htmlFor="phone" className="text-left">
                Teléfono
              </label>
              <PhoneInput onChange={handlePhone} country="ar" />
            </div>
            <div className="form-group text-left">
              <label htmlFor="email">Correo electrónico</label>
              <Field
                className="form-control"
                id="email"
                name="email"
                type="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="alert alert-danger h6 mt-2"
              />
            </div>
            <div className="form-group text-left">
              <label htmlFor="message">Mensaje</label>
              <Field
                as="textarea"
                rows="4"
                className="form-control"
                id="message"
                name="message"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="alert alert-danger h6 mt-2"
              />
            </div>
            <button
              className="btn btn-info mt-2"
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
