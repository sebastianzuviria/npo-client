import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { LazyLoad } from 'react-observer-api';

const BasicLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <LazyLoad>
        <div
          className="animate__animated animate__fadeIn"
          style={{ position: 'relative', zIndex: 2 }}
        >
          {children}
        </div>
      </LazyLoad>
      <Footer />
    </React.Fragment>
  );
};

export default BasicLayout;
