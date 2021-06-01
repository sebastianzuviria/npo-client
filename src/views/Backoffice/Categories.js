import React , { useState } from 'react';
import BackOfficeLayout from '../../Layouts/BackOfficeLayout';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { Button } from 'react-bootstrap'


const Categories = () => {

  return (
    <BackOfficeLayout>
      <CategoriesList />
    </BackOfficeLayout>
  );
};

export default Categories;
