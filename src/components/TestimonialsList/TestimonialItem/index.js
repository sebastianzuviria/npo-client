import React from 'react';

const TestimonialItem = ({id, name, content}) => {
    
    return(

        <div className="TestimonialItem__content">

            <h5 className="TestimonialItem__h5" >{name}</h5>
            <p className="TestimonialItem_p" >{content}</p>
            <i className="fas fa-trash-alt"></i>
            <i className="fas fa-edit"></i>
        </div>
    )

}
export default TestimonialItem;