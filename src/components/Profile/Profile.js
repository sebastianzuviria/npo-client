import React from 'react';
import { useSelector } from 'react-redux';
import { userLogged } from '../../slices/userSlice';
import EditBtn from './EditBtn/EditBtn';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import ProfileForm from './ProfileForm/ProfileForm';
import ShowData from './ShowData/ShowData';
import UpdateImage from './UpdateImage/UpdateImage';

const Profile = () => {
  const user = useSelector(userLogged);

  return (
    <>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mx-5 mt-5">
        <h2 className="h2">Bienvenid@ {user?.firstName || 'usuario'}!</h2>
        <div className="d-flex justify-content-between align-items-center">
          <EditBtn
            icon="fa-user-edit"
            text="Editar datos"
            modalName="profileForm"
          >
            <ProfileForm user={user} />
          </EditBtn>
          <LogoutBtn />
        </div>
      </div>
      <hr className="mx-4" />
      <div className="d-flex flex-column flex-md-row justify-content-evenly mt-5 vh-100">
        <UpdateImage user={user} />
        <div className="d-flex flex-column w-75 mx-auto mx-md-0 px-md-5 my-5 my-md-0">
          <ShowData name="Nombre/s" value={user?.firstName || ''} />
          <ShowData name="Apellido/s" value={user?.lastName || ''} />
          <ShowData name="Correo electrónico" value={user?.email || ''} />
          <ShowData name="Privilegios" value={user?.role || ''} />
        </div>
      </div>
    </>
  );
};

export default Profile;
