import React from 'react';
import './CategoriesList.css';

const CategoriesList = ({name}) => {
    return (
        <div className="categories-list">
            <h1 className="list-title">Categories List</h1>
            
            {/* Puede ser transformado en un componente independiente */}
            <div className="category-container">
                <div className="category-info">
                    <p className="category-info__tag">Category Name: </p>
                    <p className="category-info__name">{ name }</p>
                </div>
                <div className="category-actions">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CategoriesList;