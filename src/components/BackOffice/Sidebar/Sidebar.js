import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import links from './links';

const Sidebar = () => {
  return (
    <div className="col-md-4 col-lg-3 col-xl-2 p-0 sidebar bg-light">
      <ul className="nav flex-column">
        {links.map(({ path, text }, idx) => {
          return (
            <Link
              to={path}
              key={idx}
              className="nav-link bg-info p-2 text-white"
            >
              {text}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
