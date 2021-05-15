import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import BackOfficeLayout from '../components/BackOffice/BackOfficeLayout';
import UserList from '../views/UserList';
import Activities from '../views/Activities';
import Categories from '../views/Categories';
import BackofficeNews from '../views/BackofficeNews';
import Organization from '../views/Organization';
import PublicRoute from './components/PublicRoute';
import { shallowEqual, useSelector } from 'react-redux';
import { userLogged } from '../slices/userSlice';

const BackOfficeRoutes = () => {
  //const user = useSelector(userLogged, shallowEqual);
  return (
    <>
      <PublicRoute exact path="/backoffice" component={BackOfficeLayout} />
      <PrivateRoute
        exact
        path="/backoffice/usuarios"
        component={UserList}
        role="Admin"
      />

      <PrivateRoute
        exact
        path="/backoffice/actividades"
        component={Activities}
        role="Admin"
      />
      <PrivateRoute
        exact
        path="/backoffice/novedades"
        component={BackofficeNews}
        role="Admin"
      />
      <PrivateRoute
        exact
        path="/backoffice/organizacion"
        component={Organization}
        role="Admin"
      />
      <PrivateRoute
        exact
        path="/backoffice/categorias"
        component={Categories}
        role="Admin"
      />
    </>
  );
};

export default BackOfficeRoutes;
