import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { userLogged } from '../../slices/userSlice';
import navBarItems from './navBarItems';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  const [navItems, setNavItems] = useState([]);
  const user = useSelector(userLogged, shallowEqual);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      setNavItems(
        navBarItems.filter(
          (item) => item.route !== '/login' && item.route !== '/signup'
        )
      );
    } else {
      setNavItems(navBarItems.filter((item) => item.restricted !== true));
    }
  }, [user]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light py-2 shadow-sm">
      <div className="container-fluid">
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#appHeader"
          aria-controls="appHeader"
          aria-expanded="false"
          aria-label="Cambiar Navegación"
        >
          <i className="fas fa-bars"></i>
        </button>
        <NavLink className="navbar-brand h-100" to="/">
          <img className="img-fluid" src={logo} alt={logo} />
        </NavLink>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="appHeader"
        >
          <ul className="navbar-nav mb-2 mb-md-0 mx-0 px-2 rounded w-100 justify-content-evenly">
            {navItems.map(({ text, route }, idx) => {
              console.log(route.slice(1));
              return (
                <NavLink
                  key={idx}
                  className={`nav-link mb-2  mb-lg-0  mx-lg-3 px-2 rounded  ${
                    (location.pathname.startsWith(route) && route !== '/') ||
                    location.pathname === route
                      ? 'disabled navbar-active'
                      : 'header__ul'
                  }`}
                  to={route}
                >
                  {text}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

//<li className="nav-item mx-1" key={idx}></li>
//</li>
