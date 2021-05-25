import React from "react";
import { useEffect, useState } from "react";
import apiGetService from "../../services/apiGetService";
import Category from "./Category/Category";
import './CategoriesList.css';
// import '../Table/Table.css'


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

        <div>
            <h3>Categories</h3>

            <div className='container-sm'>
                {categories.length > 0 ?(
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((item, i) => (

                                <Category key={item.id} name={item.name} description={item.description} id={item.id}  setCategories={setCategories}/>

                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="row">
                        <p>There is no registered categories</p>
                    </div>
                    
                )}

            </div>
        </div>
            

    );
};


export default CategoriesList;
