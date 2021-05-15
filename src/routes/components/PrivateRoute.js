import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import userLogged from '../../helpers/userLogged';

const PrivateRoute = ({
  component: Component,
  fallback = '/backoffice',
  path = '/',
  role = '',
  ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        const user = userLogged();
        return (user && role === '') || (user && user.role === role) ? (
          <Component {...props} />
        ) : (
          <Redirect push to={fallback} />
        );
      }}
    />
  );
};
export default PrivateRoute;
