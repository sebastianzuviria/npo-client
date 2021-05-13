import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import BackOfficeLayout from '../components/BackOffice/BackOfficeLayout';
import UserList from '../views/UserList';
import Activities from '../views/Activities';
import Categories from '../views/Categories';
import BackofficeNews from '../views/BackofficeNews';
import Organization from '../views/Organization';

const BackOfficeRoutes = () => {
  return (
    <React.Fragment>
      <PrivateRoute exact path="/backoffice" component={BackOfficeLayout} />
      <PrivateRoute exact path="/backoffice/usuarios" component={UserList} />
      <PrivateRoute
        exact
        path="/backoffice/actividades"
        component={Activities}
      />
      <PrivateRoute
        exact
        path="/backoffice/novedades"
        component={BackofficeNews}
      />
      <PrivateRoute
        exact
        path="/backoffice/organizacion"
        component={Organization}
      />
      <PrivateRoute
        exact
        path="/backoffice/categorias"
        component={Categories}
      />
    </React.Fragment>
  );
};

export default BackOfficeRoutes;
