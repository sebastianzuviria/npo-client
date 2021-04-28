import React from 'react';

// Styles
import './header.styles.css';

// Components
import NavItem from '../nav-item/nav-item';

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