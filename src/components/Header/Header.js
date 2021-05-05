import React, { useState } from 'react';

// Styles
import './Header.styles.css';

// Components
import NavItem from '../NavItem/NavItem';

// Mock Logo
import logo from '../../assets/logo.png';

const Header = () => {
  const [navbarItems, setNavbarItems] = useState([
    {
      id: 1,
      text: 'Home',
      route: '/'
    },
    {
      id: 2,
      text: 'Contacts',
      route: '/contacts'
    },
    {
      id: 3,
      text: 'Signup',
      route: '/signup'
    },
    {
      id: 4,
      text: 'Profile',
      route: '/profile'
    },
    {
      id: 5,
      text: 'Users',
      route: '/users'
    },
    {
      id: 6,
      text: 'News Form',
      route: '/newsform'
    },
    { id: 7, text: 'Novedades', route: '/novedades' }
  ]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-container">
        {navbarItems.map((item) => {
          return (
            <NavItem
              key={item.id}
              itemText={item.text}
              itemRoute={item.route}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
