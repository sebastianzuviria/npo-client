import React from 'react';
import Footer from '../components/Footerdinamic/Footer';
import Header from '../components/Header/Header';
import { LazyLoad } from 'react-observer-api';

const BasicLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <LazyLoad>
        <div className="animate__animated animate__fadeIn">
          {children}
        </div>
      </LazyLoad>
      <Footer />
    </React.Fragment>
  );
};

export default BasicLayout;
