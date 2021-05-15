import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import userLogged from '../../helpers/userLogged';

const RestrictedRoute = ({
  component: Component,
  fallback = '/backoffice',
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const user = userLogged();
        return !user ? (
          <Component {...props} />
        ) : (
          <Redirect push to={fallback} />
        );
      }}
    />
  );
};

export default RestrictedRoute;
