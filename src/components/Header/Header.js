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
  const [isNavOpen, setIsNavOpen] = useState(false);
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
    <div className="header__container">

      <div className={`header__toggle ${ isNavOpen && 'header__action-open' }`}
        onClick={() => setIsNavOpen(!isNavOpen)}>

        <span></span>

      </div>
      <div className="header__logo-container">

        <img className="header__logo" src={logo} />

      </div>

      <nav className={`header__nav-container ${isNavOpen && 'header__action-show'}`}>
        {navItems.map(({ text, route }, idx) => {
          return <NavItem key={idx} itemText={text} itemRoute={route} />;
        })}
      </nav>
    </div>
  );
};

export default Header;
