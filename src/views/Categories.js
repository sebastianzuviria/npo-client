import React from 'react';
import BackOfficeLayout from '../components/BackOffice/BackOfficeLayout';
import CategoriesList from '../components/CategoriesList/CategoriesList';

const Categories = () => {
  return (
    <BackOfficeLayout>
      <CategoriesList />
    </BackOfficeLayout>
  );
};

export default Categories;
