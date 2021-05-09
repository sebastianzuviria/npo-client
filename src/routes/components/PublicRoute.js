import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { imLogged } from '../../helpers/imLogged';

const PublicRoute = ({ component: Component, restricted, fallback = '/', ...rest }  ) => {

    const userLogged = imLogged();

    return (

    <Route {...rest} render= { props => (

        userLogged && restricted ?  <Redirect to={ fallback } /> : <Component { ...props } />

    ) } />

    )
}

export default PublicRoute;
