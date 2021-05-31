import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { errorAlert, successAlert } from '../../Alert/Alert';
import { Button } from 'react-bootstrap';
import InputField from '../../SignupForm/InputField';
import apiUpdateService from '../../../services/apiUpdateService';
import { userLogin } from '../../../slices/userSlice';
import { changeModalState } from '../../../slices/modalSlice';

const ProfileForm = ({ user }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Ingresa un mail válido')
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: ''
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      let newValues = {};
      Object.keys(values).map((value) => {
        if (values[value].length > 0) {
          newValues[value] = values[value];
        }
      });
      const updatedValues = await apiUpdateService('users', '', newValues);
      if (updatedValues) {
        dispatch(userLogin({ ...user, ...updatedValues }));
        await successAlert();
        dispatch(changeModalState(''));
      }
    } catch (e) {
      setSubmitting(false);
      await errorAlert();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <InputField label="Nombre/s" name="firstName" type="text" />
          <InputField label="Apellido/s" name="lastName" type="text" />
          <InputField label="Correo electrónico" name="email" type="email" />
          <Button
            className="btn-warning w-100 my-2 mt-4"
            disabled={isSubmitting}
            type="submit"
          >
            Actualizar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
