import React, { useRef } from 'react';
import userLogged from '../../../helpers/userLogged';
import SideLink from './SideLink';
import './Sidebar.css';
import MenuView from './MenuView';

const Sidebar = () => {
  const user = userLogged();
  const menuRef = useRef(null);

  return (
    <div className="scroll-menu container-fluid p-0">
      <MenuView icon="fas fa-arrow-left" menuRef={menuRef} scrollTo="left" />
      <ul className="nav scrolling-wrapper" ref={menuRef}>
        <SideLink path="/backoffice" name="Perfil" icon="fas fa-user-circle" />
        {user && user.role === 'Admin' && (
          <>
            <SideLink
              path="/backoffice/users"
              name="Usuarios"
              icon="fas fa-users"
            />
            <SideLink
              path="/backoffice/categories"
              name="Categorias"
              icon="fas fa-list-ul"
            />
            <SideLink
              path="/backoffice/activities"
              name="Actividades"
              icon="fas fa-tasks"
            />
            <SideLink
              path="/backoffice/news"
              name="Novedades"
              icon="fas fa-newspaper"
            />
            <SideLink
              path="/backoffice/organization"
              name="Organizacion"
              icon="fas fa-user-tie"
            />
            <SideLink
              path="/backoffice/testimonials"
              name="Testimonios"
              icon="fas fa-comments"
            />
            <SideLink
              path="/backoffice/editHome"
              name="Editar Inicio"
              icon="fas fa-house-user"
            />
          </>
        )}
      </ul>
      <MenuView icon="fas fa-arrow-right" menuRef={menuRef} scrollTo="right" />
    </div>
  );
};

export default Sidebar;
