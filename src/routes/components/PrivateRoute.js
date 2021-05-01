import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLogged } from '../../slices/userSlice';

// role must be 'Admin' or 'Standard', and roleId must be send from server when the user is logged

const PrivateRoute = ({ children, role, ...rest }) => {
    const user = useSelector(userLogged);

    return (
      <Route
        {...rest}
        render={({ location }) =>
          role === user.roleId.name ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  };

  export default PrivateRoute