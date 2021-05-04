import React from 'react';

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