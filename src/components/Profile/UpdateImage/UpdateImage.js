import React from 'react';
import EditBtn from '../EditBtn/EditBtn';
import ImageForm from './ImageForm';
import './UpdateImage.css';

const UpdateImage = ({ user }) => {
  return (
    <div className="d-flex flex-column justify-content-start align-items-center">
      <div className="img-container rounded-circle border border-3 mb-2">
        {user.image ? (
          <img
            src={user.image}
            className="img-fluid"
            alt={`Imagen de perfil de ${user.firstName} ${user.lastName}`}
          />
        ) : (
          `${user.firstName} ${user.lastName}`
        )}
      </div>
      <EditBtn text="Editar imagen" icon="fa-cloud-upload">
        <ImageForm />
      </EditBtn>
    </div>
  );
};

export default UpdateImage;
