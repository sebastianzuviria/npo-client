import React from 'react';
import BackOfficeLayout from '../../Layouts/BackOfficeLayout';
import Form from '../../components/FormActivities/Form';
import Table from '../../components/TableActivities/Table';

const Activities = () => {
  return (
    <BackOfficeLayout>
      <Table />
      <Form />
    </BackOfficeLayout>
  );
};

export default Activities;
