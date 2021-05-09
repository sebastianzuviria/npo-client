import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { imLogged } from '../../helpers/imLogged';

const PublicRoute = ({ component: Component, restricted, fallback = '/' }  ) => {

    const userLogged = imLogged();

    return (

    <Route render= { () => (

        userLogged && restricted ?  <Redirect to={ fallback } /> : <Component />

    ) } />

    )
}

export default PublicRoute;
