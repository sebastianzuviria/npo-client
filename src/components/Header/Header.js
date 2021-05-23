import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { userLogged } from '../../slices/userSlice';
import navBarItems from './navBarItems';
import logo from '../../assets/logo.png';
import './Header.css'

const Header = () => {

    const [navItems, setNavItems] = useState([]);
    const user = useSelector(userLogged, shallowEqual);
    const location = useLocation();

    useEffect(() => {

        console.log(user, 'user has changed');

        if (user) {
            setNavItems(
                navBarItems.filter(
                    (item) =>
                        item.route !== '/login' && item.route !== '/signup'
                )
            );
        } else {
            setNavItems(
                navBarItems.filter((item) => item.route !== '/backoffice')
            );
        }
    }, [user]);

    return (
        <nav className='navbar navbar-expand-lg navbar-light sticky-top bg-light py-3 shadow-sm'>
            <div className='container-fluid mx-auto'>
                <button
                    className='navbar-toggler border-0'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#appHeader'
                    aria-controls='appHeader'
                    aria-expanded='false'
                    aria-label='Cambiar Navegación'
                >
                    <i className='fas fa-bars'></i>
                </button>
                <NavLink className='mx-auto' to='/'>
                    <img className='my-2 navbar-brand img-fluid' src={ logo } alt={ logo } />
                </NavLink>
                <div
                    className='collapse navbar-collapse justify-content-center'
                    id='appHeader'
                >
                        {
                            navItems.map(({ text, route }, idx) => {
                                return (
                                    <ul className='navbar-nav mb-2 mb-lg-0 mx-5 px-2 header__ul rounded' key={idx}>
                                        <li className='nav-item'>
                                            <NavLink className={ `nav-link ${ location.pathname === route && 'disabled' }` } to={route}>
                                                { text }
                                            </NavLink>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                </div>
            </div>
        </nav>
    );
};

export default Header;
