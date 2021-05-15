import React from 'react';
import { NavLink } from 'react-router-dom';

const SideLink = ({ path, name }) => {
  return (
    <NavLink to={path} className="nav-link bg-info p-2 text-white">
      {name}
    </NavLink>
  );
};

export default SideLink;
