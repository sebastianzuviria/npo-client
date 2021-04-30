import React from 'react';
import './Footer.css';

const Footer = () => {
    const [mock] = React.useState({

        img: "https://picsum.photos/200", 
        linkWeb: "https://jonathangomezit.com",
        socialMedia:[
            {
                icon: "fab fa-instagram-square",
                name: "Instagram",
                url: "https://www.instagram.com/"
            },
            {
                icon: "fab fa-facebook-square",
                name: "Facebook",
                url: "https://www.facebook.com/",
            },
            {
                icon: "fab fa-twitter-square",
                name: "Twitter",
                url: "https://www.twitter.com"
            }
        ]
    })
    return(
        <footer className="footer__content">
            <img src={mock.img} alt="logo" className="footer__logo"/>
            <a href={mock.linkWeb} className="footer__linkweb" >Test Site</a>
            <div className="footer__content-social">
            {
                mock.socialMedia.map(({name, url, icon}, index) => (<div>
                    <i key= {index} href={url} className={`${icon} footer__items`}></i>
                    <span>{name}</span>
                    </div>)
                )
            }
            </div>
        </footer>
    )
}

export default Footer;