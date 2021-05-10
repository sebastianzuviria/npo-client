import React from 'react';
import './Category.css';

const Category = ({ name }) => {
    return (
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
    )
}

export default Category;