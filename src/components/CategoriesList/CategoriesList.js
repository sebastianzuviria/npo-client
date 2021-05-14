import React from "react";
import { useEffect, useState } from "react";
import "./CategoriesList.css";
import apiGetService from "../../services/apiGetService";
import Category from "./Category/Category";

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    const allcategories = async () => {

            const info = await apiGetService('categories');
            setCategories(info);
        
    };

    useEffect(() => {
        allcategories();
    }, []);

    return (
        <div className="categories-list">
            <h1 className="list-title">Categories List</h1>

            {categories.length > 0 ? (
                categories.map((item) => (
                <div>
                    <Category key={item.id} name={item.name} id={item.id} />
                </div>
                ))
            ) : (
                <p>There is no registered categories</p>
            )}
        </div>
    );
};

export default CategoriesList;
