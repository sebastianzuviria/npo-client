import React from 'react';
import './CategoriesList.css';

const CategoriesList = ({name}) => {
    return (
        <div className="categories-list">
            <div className="category-container">
                <div className="category-info">
                    <p className="category-info__tag">Category Name:</p>
                    <h2 className="category-info__name">{ name }</h2>
                </div>
                <div className="category-actions">
                
                </div>
            </div>
        </div>
    )
}

export default CategoriesList;