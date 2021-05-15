import React, { useState } from 'react';

// Styles
import './Header.styles.css';

// Components
import NavItem from '../NavItem/NavItem';

// Mock Logo
import logo from '../../assets/logo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
    <div className="header__container">

      <div className={`header__toggle ${ isNavOpen && 'header__action-open' }`}
        onClick={() => setIsNavOpen(!isNavOpen)}>

        <span></span>

      </div>

      <div className="header__logo-container">

        <img className="header__logo" src={logo} />

      </div>

      <nav className={`header__nav-container ${isNavOpen && 'header__action-show'}`}>
        {navbarItems.map((item) => {
          return (
            <NavItem
              key={item.id}
              itemText={item.text}
              itemRoute={item.route}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
