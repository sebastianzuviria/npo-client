import React, { useEffect, useState } from 'react';

// Styles
import './Header.styles.css';

// Components
import NavItem from '../NavItem/NavItem';

// Mock Logo
import logo from '../../assets/logo.png';
import navbarItems from './navbarItems';
import { shallowEqual, useSelector } from 'react-redux';
import { userLogged } from '../../slices/userSlice';
//import userLogged from '../../helpers/userLogged';

const Header = () => {
  const [navItems, setNavItems] = useState([]);
  const user = useSelector(userLogged, shallowEqual);
  //const user = userLogged();
  useEffect(() => {
    console.log(user, 'user has changed');
    if (user) {
      setNavItems(
        navbarItems.filter(
          (item) => item.route !== '/login' && item.route !== '/signup'
        )
      );
    } else {
      setNavItems(navbarItems.filter((item) => item.route !== '/backoffice'));
    }
  }, [user]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-container">
        {navItems.map(({ text, route }, idx) => {
          return <NavItem key={idx} itemText={text} itemRoute={route} />;
        })}
      </div>
    </div>
  );
};

export default Header;
