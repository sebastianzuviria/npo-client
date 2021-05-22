import React from 'react';
import Footer from '../components/Footerdinamic/Footer';
import Header from '../components/Header/Header';

const BasicLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="animate__animated animate__fadeIn">
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default BasicLayout;
