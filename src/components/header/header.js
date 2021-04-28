import React, { useState } from 'react';

// Styles
import './header.styles.css';

// Components
import NavItem from '../nav-item/nav-item';

const Header = () => {
    const [navbarItems, setNavbarItems] = useState(
        [
            {
                'id': 1,
                'text': 'Actividades',
                'route': 'https://github.com/'
            },
            {
                'id': 2,
                'text': 'Noticias',
                'route': 'https://github.com/'
            },
            {
                'id': 3,
                'text': 'Contactanos',
                'route': 'https://github.com/'
            },
        ]
    );

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="#"/>
            </div>
            <div className="nav-container">
                {

                    navbarItems.map(item => {
                        return <NavItem key={item.id} itemText={item.text} itemRoute={item.route}/>
                    })
                }
            </div>
        </div>
    )
}

export default Header;