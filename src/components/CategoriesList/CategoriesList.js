import React from 'react';
import { useEffect, useState } from 'react';
import './CategoriesList.css';
import Axios from 'axios';
import Category from './Category/Category';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

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
};

export default CategoriesList;
