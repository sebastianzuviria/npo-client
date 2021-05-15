import React from 'react';
import Footer from '../components/Footerdinamic/Footer';
import Header from '../components/Header/Header';

const BasicLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default BasicLayout;
