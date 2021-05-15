import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { userLogged } from '../../slices/userSlice';

const PublicRoute = ({
  component: Component,
  fallback = '/',
  restricted = false,
  ...rest
}) => {
  const user = useSelector(userLogged);
  // if (user) {
  return (
    <Route
      {...rest}
      render={(props) =>
        (user && !restricted) || !user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: fallback, state: { from: props.location } }}
          />
        )
      }
    />
  );
  //} else {
  // return <div>kasdjf</div>;
  // }
};

export default PublicRoute;
