import React from 'react';
import Table from '../components/Table/Table';
import AlertComponentExample from '../components/Alert/AlertComponentExample';
import BackOfficeLayout from '../components/BackOffice/BackOfficeLayout';

const UserList = () => {
  return (
    <BackOfficeLayout>
      <Table />
      <AlertComponentExample />
    </BackOfficeLayout>
  );
};

export default UserList;
