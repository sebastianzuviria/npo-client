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

    const actualDate = new Date();

    const contactItems = [
        {
            id: 1,
            icon: 'fa-map-marker-alt',
            link: 'https://goo.gl/maps/KYAFS1RoRG9XUWe8A',
            text: 'Melide 1404, A. Brown'

        },
        {
            id: 2,
            icon: 'fa-phone',
            link: 'tel:+54111562332380',
            text: '(011) 15-6233-2380'

        },
        {
            id: 3,
            icon: 'fa-envelope',
            link: 'mailto:email@email.com',
            text: 'email@email.com'

        },
    ];

    const socialItems = [
        {
            id: 1,
            icon: 'fa-facebook-f',
            link: facebook
        },
        {
            id: 2,
            icon: 'fa-instagram',
            link: instagram
        },
        {
            id: 3,
            icon: 'fa-linkedin-in',
            link: linkedin
        },
    ]

    useEffect(() => {

        ( async () => {

            const { name, image, socialmedia } = await apiGetService('organizations/public');
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
                <div className='row row-cols-1 row-cols-md-3 '>
                    <div className='col footer__col'>
                        <img className='footer__img mb-2' src={ image } alt={ image } />
                        <p className='mt-4 mb-1 text-white-50'>Todos los derechos reservados</p>
                        <p className='text-muted'>{ name } ©  { actualDate.getFullYear() }</p>
                    </div>
                    <div className='col footer__col footer__col-pad'>
                        {
                            contactItems.map( ({ id, icon, link, text })  =>  {
                                
                                return (
                                <div className={ ( id !== 1 ) ? 'my-3' : '' } key={ id }>
                                    <a target='_blank' href={ link } rel='noreferrer' className='footer__linkweb'>
                                        <span className='fa-stack me-3'>
                                            <i className='fas fa-circle fa-stack-2x footer__fa'></i>
                                            <i  className={`fas ${ icon } fa-stack-1x text-white`}></i> 
                                        </span>
                                        <span className='text-white-50'>
                                            { text }
                                        </span>
                                    </a>
                                </div>
                                );

                            })
                        }
                    </div>
                    <div className='col footer__col footer__col-pad'>
                        <div>
                            <h5 className='text-white-50'>Acerca de Nosotros</h5>
                            <p className='text-muted mt-3 mb-4'>Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula.</p>
                        </div>
                        <div className='footer_social-container my-2 justify-content-center'>
                            {
                                socialItems.map( ({ id, icon, link }) => {
                                    
                                    return (
                                        <a target='_blank' href={ link } rel='noreferrer' key={ id }>
                                            <span className='fa-stack fa-lg'>
                                                <i className='fas fa-square fa-stack-2x footer__fa'></i>
                                                <i  className={`fab ${ icon } fa-stack-1x text-white`}></i>
                                            </span>
                                        </a>
                                    );
                                    
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
