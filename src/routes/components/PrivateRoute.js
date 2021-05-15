import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { userLogged } from '../../slices/userSlice';
// role must be 'Admin' or 'Standard', and roleId must be send from server when the user is logged

const PrivateRoute = ({
  component: Component,
  fallback = '/',
  role = '',
  ...rest
}) => {
  /*<Route {...rest} render={(props) => <Component {...props} />} />*/
  const user = useSelector(userLogged);
  const authorized = user && user.role === role;

  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(' is authorized? ', authorized);
        return authorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            push
            to={{ pathname: fallback, state: { from: props.location } }}
          />
        );
      }}
    />
  );
};
export default PrivateRoute;
