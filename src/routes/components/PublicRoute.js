import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import userLogged from '../../helpers/userLogged';

const PublicRoute = ({ component: Component, restricted, fallback = '/', ...rest }  ) => {

    const userIsLogged = userLogged();

    return (

    <Route {...rest} render= { props => (

        userIsLogged && restricted ?  <Redirect to={ fallback } /> : <Component { ...props } />

    ) } />

    )
}

export default PublicRoute;
