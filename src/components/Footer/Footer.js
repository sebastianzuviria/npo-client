import React, { useState } from 'react';
import './Footer.css';
import IconList from './iconList/IconList';

const Footer = () => {
    const [mock] = useState({
        ongName: "ONG - alkemy",
        img: "https://picsum.photos/200",   
        linkWeb: "https://jonathangomezit.com",
        socialMedia:[
            {
                icon: "fab fa-instagram-square",
                name: "Instagram/ong",
                url: "https://www.instagram.com/"
            },
            {
                icon: "fab fa-facebook-square",
                name: "Facebook/ong",
                url: "https://www.facebook.com/",
            },
            {
                icon: "fab fa-twitter-square",
                name: "Twitter/ong",
                url: "https://www.twitter.com"
            }
        ]
    })
    return(
        <footer className="footer__content">

            <div className="footer__content-logo">
                <img src={mock.img} alt="logo" className="footer__logo"/>
                <h4>{mock.ongName}</h4>
            </div>

            <div className="footer__content-social">
            {
                mock.socialMedia.map((values, index) => (<IconList key={index} {...values} />))
            }
            </div>

            <div className="footer__content-website">
                    <span>Web Site: </span>
                    <a href={mock.linkWeb} target= "_blank" rel="noopener noreferrer" className="footer__linkweb" >{mock.linkWeb}</a>
            </div>

        </footer>
    )
}

export default Footer;