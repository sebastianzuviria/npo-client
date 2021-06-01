import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { userLogout } from '../../../slices/userSlice';
import { confirmAlert, errorAlert } from '../../Alert/Alert';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = async () => {
    try {
      const confirmLogout = await confirmAlert();
      if (confirmLogout.isConfirmed) {
        dispatch(userLogout());
        history.push('/');
      }
    } catch (err) {
      await errorAlert();
    }
  };
  return (
    <Button
      className="btn btn-secondary ms-2 text-nowrap"
      onClick={handleLogout}
    >
      Cerrar sesión
    </Button>
  );
};

export default LogoutBtn;
