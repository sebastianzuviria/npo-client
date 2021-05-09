import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { imLogged } from '../../helpers/imLogged';

// role must be 'Admin' or 'Standard', and roleId must be send from server when the user is logged

const PrivateRoute = ( { component: Component, fallback, ...rest } ) => {
  // TODO: use state from reducer
  // TODO: Handle roles
  const userIsLogged = imLogged();

  return(

    <Route {...rest} render={ props => (

      userIsLogged ? <Component { ...props } /> : <Redirect to='/login' />

    ) } />
  )

  // return (

  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       userIsLogged ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: moveTo,
  //             state: { from: location }
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );

}

  export default PrivateRoute;