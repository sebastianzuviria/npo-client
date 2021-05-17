import React from 'react';
import userLogged from '../../../helpers/userLogged';
import './Sidebar.css';
import SideLink from './SideLink';

const Sidebar = () => {
  const user = userLogged();

  return (
    <div className="col-md-4 col-lg-3 col-xl-2 p-0 sidebar bg-light">
      <ul className="nav flex-column">
        <SideLink path="/backoffice" name="Perfil" />
        {user && user.role === 'Admin' && (
          <>
            <SideLink path="/backoffice/users" name="Usuarios" />
            <SideLink path="/backoffice/categories" name="Categorias" />
            <SideLink path="/backoffice/activities" name="Actividades" />
            <SideLink path="/backoffice/news" name="Novedades" />
            <SideLink path="/backoffice/organization" name="Organizacion" />
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
