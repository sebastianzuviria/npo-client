import React, { useState, useEffect } from 'react';
import apiGetService from '../../services/apiGetService';
import './Footer.css';

const Footer = () => {

    const [{ name, image, facebook, instagram, linkedin }, setFooterState] = useState({
        name: '',
        image: '',
        facebook: '',
        instagram: '',
        linkedin: '',
    });

    useEffect(() => {

        ( async () => {

            const { name, image, socialmedia } = await apiGetService(
                'organizations/public'
            );
            const { facebook, instagram, linkedin } = socialmedia;

            setFooterState({
                name,
                image,
                facebook,
                instagram,
                linkedin,
            });
        } )();

    }, []);

    return (
        <footer className='footer__content py-5 px-3'>
            <div className='container'>
                <div className='row'>
                <div className='col d-flex flex-column justify-content-center align-items-center footer__about'>
                        <div className='footer__about-title'>
                            ACERCA DE { name.toUpperCase() }
                        </div>
                        <img src={ image } className='img-fluid my-4 footer__img' alt={ image } />
                        <div className='footer__about-desc mt-2'>
                        <i  className='fas fa-phone footer__social-icon-phone me-2'></i> 
                        <span className='footer__span-text'>011-12345678</span>
                        </div>
                    </div>
                    <div className='col'>
                    </div>
                    <div className='col'>
                        <div className='footer_social-container my-2'>
                            <a target='_blank' href='mailto: email@zonasgrises.com' rel='noreferrer' className='footer__linkweb'>
                                <span>
                                    <i  className='fas fa-envelope footer__social-icons me-3'></i>
                                    <span className='footer__span-text'>email@email.com</span>
                                </span>
                            </a>
                        </div>
                        <div className='footer_social-container my-2'>
                            <a target='_blank' href={ instagram } rel='noreferrer' className='footer__linkweb'>
                                <span>
                                    <i  className='fab fa-instagram footer__social-icons me-3'></i>
                                    <span className='footer__span-text'>@zonasgrises</span>
                                </span>
                            </a>
                        </div>
                        <div className='footer_social-container my-2'>
                            <a target='_blank' href={ facebook } rel='noreferrer' className='footer__linkweb'>
                                <span>
                                    <i  className='fab fa-facebook-square footer__social-icons me-3'></i>
                                    <span className='footer__span-text'>@zonasgrises</span>
                                </span>
                            </a>
                        </div>
                        <div className='footer_social-container my-2'>
                            <a href={ linkedin } rel='noreferrer' className='footer__linkweb'>
                                <span>
                                    <i  className='fab fa-linkedin footer__social-icons me-3'></i>
                                    <span className='footer__span-text'>@zonasgrises</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
