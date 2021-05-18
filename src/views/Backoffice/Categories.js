import React from 'react';
import BackOfficeLayout from '../../Layouts/BackOfficeLayout';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import FormCategories from '../../components/FormCategories/Form';

const Categories = () => {
  return (
    <BackOfficeLayout>
      <CategoriesList />
      <FormCategories />
    </BackOfficeLayout>
  );
};

export default Categories;
