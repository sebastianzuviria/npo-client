import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import apiPostService from '../../services/apiPostService';
import { errorAlert, successAlert } from '../Alert/Alert';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../slices/userSlice';
import InputField from './InputField';

const SignupForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Debe contener menos de 15 caracteres.')
      .required('Campo requerido.'),

    lastName: Yup.string()
      .max(20, 'Debe contener menos de 20 caracteres.')
      .required('Campo requerido.'),

    email: Yup.string().email('Email no válido.').required('Campo requerido.'),

    password: Yup.string()
      .min(6, 'Debe tener un mínimo de 6 caracteres.')
      .required('Campo requerido.')
  });

  const handleSubmit = async (values) => {
    try {
      const authResponse = await apiPostService('users/auth/register', values);
      dispatch(userLogin(authResponse));
      await successAlert();
      history.push('/');
    } catch (err) {
      await errorAlert(err);
    }
  };

  return (
    <div className="container d-flex wrapper">
      <div className="row align-items-center justify-content-center vw-100 mx-1">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="card shadow col-md-8 col-lg-6">
            <div className="card-body">
              <h2 className="card-title py-3">Registrate</h2>
              <InputField
                label="Nombre"
                name="firstName"
                type="text"
                placeholder=".."
              />

              <InputField
                label="Apellido"
                name="lastName"
                type="text"
                placeholder="..."
              />

              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="..."
              />

              <InputField
                label="Contraseña"
                name="password"
                type="password"
                placeholder="..."
              />

              <button className="w-100 btn-lg btn-primary my-3" type="submit">
                Enviar
              </button>
              <div className="form-text my-2">
                Ya estás registrado? <Link to="/login">Inicia sesión</Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
