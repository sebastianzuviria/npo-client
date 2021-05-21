import React, { useState } from 'react';
import './TopButton.css';

export const TopButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {

        const scrolled = document.documentElement.scrollTop;
        (scrolled > 300) ? setVisible( true ) : setVisible( false ); 

    }

    const goToTop = () =>{

        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });

    }

    window.addEventListener('scroll', toggleVisibility);

    return (
        <button
            className={ `TopButton__btn px-3 py-2 ${visible ? 'TopButton__btn__show' : 'TopButton__btn__hidden' }` }
            onClick={ goToTop }
        >
            <i className='fas fa-arrow-up TopButton__fa-arrow-up'></i>
        </button>  
    )
}
