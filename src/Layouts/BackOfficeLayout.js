import React from 'react';
import BasicLayout from './BasicLayout';
import Sidebar from '../components/BackOffice/Sidebar/Sidebar';

const BackOfficeLayout = ({ children }) => {
  return (
    <BasicLayout>
      <div className="container-fluid p-0 d-flex align-items-start">
        <Sidebar />
        <div className="container-fluid">{children}</div>
      </div>
    </BasicLayout>
  );
};

export default BackOfficeLayout;
