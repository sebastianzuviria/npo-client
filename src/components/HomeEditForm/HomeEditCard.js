import React from 'react';

export const HomeEditCard = ({ children, title, description}) => {
    return (
        <div className='card my-4'>
            <div className='card-header py-3'>
                    <h5 className='mb-0'>{ title }</h5>
                    <small className='mt-0 text-muted'>{ description }</small>
            </div>
            <div className='card-body'>
                { children }
            </div>
        </div>
    )
}
