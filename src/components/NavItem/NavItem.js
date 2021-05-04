import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import './NavItem.styles.css';

const NavItem = ( { itemText, itemRoute } ) => {
    return (
        <div>
            <a className="nav-item" href={ itemRoute }> { itemText } </a>
        </div>
    )
}

export default NavItem;