import React from 'react';
import BasicLayout from './BasicLayout';
import Sidebar from '../components/BackOffice/Sidebar/Sidebar';

const BackOfficeLayout = ({ children }) => {
  return (
    <BasicLayout>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-8 col-lg-9 col-xl-10">{children}</div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default BackOfficeLayout;
