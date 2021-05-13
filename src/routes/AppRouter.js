import React from 'react';

import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Contact from '../views/Contact';
import NewsForm from '../components/NewsForm/NewsForm';
import Home from '../views/Home';
import SignupForm from '../components/SignupForm/SignupForm';
import Login from '../components/Login/Login';
import PublicRoute from './components/PublicRoute';
import News from '../views/News';
import DetailedNew from '../views/DetailedNew';
import UpdateformOrganization from '../components/UpdateOrganization/UpdateOrganization';
import DetailActivity from '../views/DetailActivity';
import FormActivities from '../components/FormActivities/Form';
import BackOfficeRoutes from './BackOfficeRoutes';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/contacts" component={Contact} />
        <PublicRoute exact path="/novedades" component={News} />
        <PublicRoute exact path="/novedades/:id" component={DetailedNew} />
        <PublicRoute exact path="/activities/:id" component={DetailActivity} />
        <PublicRoute exact path="/" component={Home} />

        {/*  Restricted routes for logged users */}
        <PublicRoute
          exact
          path="/login"
          component={Login}
          restricted={true}
          fallback={'/profile'}
        />
        <PublicRoute
          exact
          path="/signup"
          component={SignupForm}
          restricted={true}
          fallback={'/profile'}
        />

        {/*  TODO: implement admin routes */}
        <BackOfficeRoutes />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
