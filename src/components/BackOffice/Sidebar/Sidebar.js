import React from 'react';
import { isLogged } from '../../../slices/userSlice';
import './Sidebar.css';
import SideLink from './SideLink';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch;
  console.log(dispatch(isLogged));
  return (
    <div className="col-md-4 col-lg-3 col-xl-2 p-0 sidebar bg-light">
      <ul className="nav flex-column">
        <SideLink path="/backoffice" name="Perfil" />
        <SideLink path="/backoffice/usuarios" name="Usuarios" />
        <SideLink path="/backoffice/categorias" name="Categorias" />
        <SideLink path="/backoffice/actividades" name="Actividades" />
        <SideLink path="/backoffice/novedades" name="Novedades" />
        <SideLink path="/backoffice/organizacion" name="Organizacion" />
      </ul>
    </div>
  );
};

export default Sidebar;
