import { React } from 'react';
import './CategoriesList';

const CategoriesList = ({name}) => {
    return (
        <div className="categories-list">
            <div className="category-container">
                <h1 className="category-name">{ name }</h1>
            </div>
        </div>
    )
}

module.exports = CategoriesList;