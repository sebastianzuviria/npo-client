import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import UserList from '../views/Backoffice/UserList';
import Activities from '../views/Backoffice/Activities';
import Categories from '../views/Backoffice/Categories';
import BackofficeNews from '../views/Backoffice/News';
import Organization from '../views/Backoffice/Organization';
import BackOffice from '../views/Backoffice/BackOffice';
import Testimonials from '../views/Backoffice/Testimonials';
import HomeEdit from '../views/Backoffice/HomeEdit';

const BackOfficeRoutes = () => {
  return (
    <>
      <PrivateRoute exact path="/backoffice" component={BackOffice} />
      <PrivateRoute
        exact
        path="/backoffice/users"
        component={UserList}
        role="Admin"
      />

      <PrivateRoute
        exact
        path="/backoffice/activities"
        component={Activities}
        role="Admin"
      />
      <PrivateRoute
        exact
        path="/backoffice/news"
        component={BackofficeNews}
        role="Admin"
      />
      <PrivateRoute
        exact
        path="/backoffice/organization"
        component={Organization}
        role="Admin"
      />
      <PrivateRoute
        exact
        path="/backoffice/categories"
        component={Categories}
        role="Admin"
      />
      <PrivateRoute
        exact
        path="/backoffice/editHome"
        component={HomeEdit}
        role="Admin"
      />

      <PrivateRoute
        exact
        path="/backoffice/testimonials"
        component={Testimonials}
        role="Admin"
      />
    </>
  );
};

export default BackOfficeRoutes;
