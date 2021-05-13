import React from 'react';
import { Link } from 'react-router-dom';

const SideLink = ({ path, name }) => {
  return (
    <Link to={path} className="nav-link bg-info p-2 text-white">
      {name}
    </Link>
  );
};

export default SideLink;
