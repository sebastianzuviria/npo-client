import React from 'react';

// Styles
import './nav-item.styles.css';

const NavItem = ( { itemTex: itemText, itemRoute } ) => {
    return (
        <div>
            <a className="nav-item" href={itemRoute}> {itemText} </a>
        </div>
    )
}

export default NavItem;