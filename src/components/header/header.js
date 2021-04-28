import { React, useState } from 'react';

// Styles
import './header.styles.css';

// Components
import NavItem from '../nav-item/nav-item';

const [navbarItems, setNavbarItems] = useState({
    'items': [
        {
            'id': 1,
            'text': 'Actividades',
            'route': 'https://github.com/'
        },
        {
            'id': 2,
            'text': 'Actividades',
            'route': 'https://github.com/'
        },
        {
            'id': 3,
            'text': 'Actividades',
            'route': 'https://github.com/'
        },
    ]
});

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="#"/>
            </div>
            <div className="nav-container">
                <NavItem itemText="Test" itemRoute="https://github.com/"/>
                <NavItem itemText="Test" itemRoute="https://github.com/"/>
                <NavItem itemText="Test" itemRoute="https://github.com/"/>
            </div>
        </div>
    )
}

export default Header;