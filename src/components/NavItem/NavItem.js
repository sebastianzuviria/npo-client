import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import './NavItem.styles.css';

const NavItem = ( { itemText, itemRoute } ) => {
    return (
        
        <a className="navItem__item" href={ itemRoute }> { itemText } </a>
        
    )
}

export default NavItem;