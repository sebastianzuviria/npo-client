import React from 'react';
import Profile from '../Profile/Profile';
import Sidebar from './Sidebar/Sidebar';

const BackOfficeLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-8 col-lg-9 col-xl-10">
          {children ? children : <Profile />}
        </div>
      </div>
    </div>
  );
};

export default BackOfficeLayout;
