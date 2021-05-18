import React from "react";
import { useEffect, useState } from "react";
import apiGetService from "../../services/apiGetService";
import Category from "./Category/Category";
import '../Table/Table.css'
import React from 'react';
import { useEffect, useState } from 'react';
import './CategoriesList.css';
import Axios from 'axios';
import Category from './Category/Category';

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

            <div className='d-flex justify-content-center'>
                {categories.length > 0 ?(
                    <table className="table table-bordered table-hw">
                        <thead>
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((item, i) => (

                                <Category key={item.id} name={item.name} id={item.id} />

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

  const mockCategories = [
    {
      id: 1,
      name: 'Test Category 1',
      description: 'This is test category number 1'
    },
    {
      id: 2,
      name: 'Test Category 2',
      description: 'This is test category number 2'
    },
    {
      id: 3,
      name: 'Test Category 1',
      description: 'This is test category number 3'
    }
  ];

  //useEffect(() => {
  //Axios.get('http://localhost:3000/backoffice/contacts')
  //.then((res) => {
  //setCategories = res.data;
  //})
  //}, []);

  return (
    <div className="categories-list">
      <h1 className="list-title">Categories List</h1>

      {mockCategories.map((category) => {
        return <Category key={category.id} name={category.name} />;
      })}
    </div>
  );


export default CategoriesList;
