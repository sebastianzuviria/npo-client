import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLogged, userLogin } from '../../../slices/userSlice';
import apiUpdateService from '../../../services/apiUpdateService';
import { errorAlert } from '../../Alert/Alert';
import { changeModalState } from '../../../slices/modalSlice';

const ImageForm = () => {
  const user = useSelector(userLogged);
  const [imageUrl, setImageUrl] = useState(undefined);
  const dispatch = useDispatch();

  const handleChange = ({ target }, formProps) => {
    const imageBlob = new Blob(target.files, { type: 'image/*' });
    const imageBlobUrl = URL.createObjectURL(imageBlob);
    setImageUrl(imageBlobUrl);

    formProps.setFieldValue('image', target.files[0]);
  };

  const initialValues = { image: '' };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const data = new FormData();
      data.append('image', values.image);
      const { image } = await apiUpdateService('users/updateimage', '', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      image ? dispatch(userLogin({ ...user, image })) : await errorAlert();
      dispatch(changeModalState(''));
    } catch (err) {
      setSubmitting(false);
      await errorAlert();
    }
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    >
      {(formProps) => (
        <>
          <Form className="d-flex flex-column align-items-center">
            <div className="img-container rounded-circle border border-3">
              {user && !user.image && !imageUrl ? (
                `${user.firstName} ${user.lastName}`
              ) : (
                <img
                  src={imageUrl !== undefined ? imageUrl : user.image}
                  alt={`Imagen de perfil de ${user.firstName} ${user.lastName}`}
                />
              )}
            </div>
            <Field
              type="file"
              className="form-control mt-5"
              name="image"
              accept="image/*"
              onChange={(e) => handleChange(e, formProps)}
              value={undefined}
            />
          </Form>
          <Button
            className="btn-warning mt-3 mb-1 w-100"
            type="submit"
            onClick={() => formProps.submitForm()}
            disabled={formProps.isSubmitting}
          >
            Guardar
          </Button>
        </>
      )}
    </Formik>
  );
};

export default ImageForm;
