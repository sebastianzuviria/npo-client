import React from 'react';
import BackOfficeLayout from '../../Layouts/BackOfficeLayout';
import NewsForm from '../../components/NewsForm/NewsForm';
import TableNovelties from '../../components/TableNovelties/TableNovelties'

const News = () => {
  return (
    <BackOfficeLayout>
      <NewsForm />
      <TableNovelties />
    </BackOfficeLayout>
  );
};

export default News;
