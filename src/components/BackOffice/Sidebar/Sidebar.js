import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isLogged, userLogged } from '../../../slices/userSlice';
import './Sidebar.css';
import SideLink from './SideLink';
import store from '../../../store';

const Sidebar = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLogged());
    setUser(userLogged(store.getState()));
  }, []);

  return (
    <div className="col-md-4 col-lg-3 col-xl-2 p-0 sidebar bg-light">
      <ul className="nav flex-column">
        <SideLink path="/backoffice" name="Perfil" />
        {user && user.roleId === 1 && (
          <>
            <SideLink path="/backoffice/usuarios" name="Usuarios" />
            <SideLink path="/backoffice/categorias" name="Categorias" />
            <SideLink path="/backoffice/actividades" name="Actividades" />
            <SideLink path="/backoffice/novedades" name="Novedades" />
            <SideLink path="/backoffice/organizacion" name="Organizacion" />
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
