import React from 'react';
import { useSelector } from 'react-redux';
import { userLogged } from '../../../slices/userSlice';
import './Sidebar.css';
import SideLink from './SideLink';

const Sidebar = () => {
  const user = useSelector(userLogged);

  return (
    <div className="col-md-4 col-lg-3 col-xl-2 p-0 sidebar bg-light">
      <ul className="nav flex-column">
        <SideLink path="/backoffice" name="Perfil" />
        {user && user.role === 'Admin' && (
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
