import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './SideLink.css';

const SideLink = ({ path, name, icon }) => {
  const location = useLocation();
  return (
    <NavLink
      to={path}
      className={`nav-link nav__color px-4 ${
        location.pathname === path && 'disabled active_link'
      }`}
    >
      <span className={`${icon} pe-2`} />
      {name}
    </NavLink>
  );
};

export default SideLink;
