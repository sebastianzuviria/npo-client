import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../slices/userSlice';
import apiPostService from '../../services/apiPostService';
import { Link, useHistory } from 'react-router-dom';
import { errorAlert, successAlert } from '../Alert/Alert';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email no válido.').required('Campo requerido.'),
    password: Yup.string()
      .min(6, 'Debe tener un mínimo de 6 caracteres.')
      .required('Campo requerido.')
  });

  const handleSubmit = async (values) => {
    try {
      const authResponse = await apiPostService('auth/login', values);
      dispatch(userLogin(authResponse));
      await successAlert();
      history.push('/');
    } catch (err) {
      await errorAlert();
    }
  };

  return (
    <div className="container d-flex wrapper">
      <div className="row align-items-center justify-content-center vw-100 mx-1">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="card shadow col-md-8 col-lg-6">
            <div className="card-body">
              <h2 className="card-title py-3">Inicia sesión</h2>
              <div className="form-floating mt-4">
                <Field
                  className="form-control"
                  type="email"
                  placeholder="Email *"
                  name="email"
                  id="email"
                />
                <label htmlFor="email">Email</label>
                <ErrorMessage
                  name="email"
                  className="invalid-feedback ml-2 d-block"
                  component="div"
                />
              </div>
              <div className="form-floating mt-4">
                <Field
                  className="form-control"
                  type="password"
                  placeholder="Password *"
                  name="password"
                  id="password"
                />
                <label htmlFor="password">Contraseña</label>
                <ErrorMessage
                  name="password"
                  className="invalid-feedback ml-2 d-block"
                  component="div"
                />
              </div>
              <button className="w-100 btn-lg btn-primary my-3" type="submit">
                Inicia sesión
              </button>
              <div className="form-text my-2">
                No tenes usuario? <Link to="/signup">Registrate acá</Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
