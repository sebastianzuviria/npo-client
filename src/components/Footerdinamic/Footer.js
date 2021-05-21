import React, { useState, useEffect } from 'react';
import './Footer.css';
import apiGetService from "../../services/apiGetService";


const Footer = () => {

    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [facebook, setFacebook] = useState();
    const [instagram, setInstagram] = useState();
    const [linkedin, setLinkedin] = useState();

    useEffect(() => {

        (async () => {


            const infoOrganization = await apiGetService('organizations/public') ;
            if(infoOrganization){
                setName(infoOrganization.name)
                setImage(infoOrganization.image)
                if(infoOrganization.socialmedia){
                    setFacebook(infoOrganization.socialmedia.facebook)
                    setInstagram(infoOrganization.socialmedia.instagram)
                    setLinkedin(infoOrganization.socialmedia.linkedin)
                }
            }

        }) ();
    }, [])

    
    return(
        <footer className="footer__content">

            <div className="footer__content-logo">
                <img src={image} alt="logo" className="footer__logo"/>
                <h4>{name}</h4>
            </div>

            <div className="footer__content-social">

                <a href={instagram} target= "_blank" rel="noopener noreferrer" title="Go to Instagram">
                    <i  className={`fab fa-instagram-square iconList__items`}></i>
                </a>
                <a href={facebook} target= "_blank" rel="noopener noreferrer">
                    <i  className={`fab fa-facebook-square iconList__items`} title="Go to Facebook"></i>
                </a>
                <a href={linkedin} target= "_blank" rel="noopener noreferrer">
                    <i  className={`fab fa-twitter-square iconList__items`} title="Go to Linkedin"></i>
                </a>

            </div>


        </footer>
    )
}

export default Footer;