import React from 'react';
import './IconList.css';

const IconList = ({url, icon, name}) => {
    return(
        <a href={url} target= "_blank">
            <i  className={`${icon} iconList__items`}></i>
        </a>
    )
}
export default IconList;