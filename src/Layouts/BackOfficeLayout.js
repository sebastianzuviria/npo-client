import React from 'react';
import BasicLayout from './BasicLayout';
import Sidebar from '../components/BackOffice/Sidebar/Sidebar';

const BackOfficeLayout = ({ children }) => {
  return (
    <BasicLayout>
      <Sidebar />
      <div className="row container-fluid">{children}</div>
    </BasicLayout>
  );
};

export default BackOfficeLayout;
