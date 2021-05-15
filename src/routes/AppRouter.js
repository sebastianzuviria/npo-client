import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from '../views/Contact';
import Home from '../views/Home';
import SignupForm from '../components/SignupForm/SignupForm';
import Login from '../components/Login/Login';
import PublicRoute from './components/PublicRoute';
import News from '../views/News';
import DetailedNew from '../views/DetailedNew';
import DetailActivity from '../views/DetailActivity';
import BackOfficeRoutes from './BackOfficeRoutes';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/contacts" component={Contact} />
        <Route exact path="/novedades" component={News} />
        <Route exact path="/novedades/:id" component={DetailedNew} />
        <PublicRoute exact path="/activities/:id" component={DetailActivity} />

        {/*  Restricted routes for logged users */}
        <PublicRoute
          exact
          path="/login"
          component={Login}
          restricted={true}
          fallback={'/'}
        />
        <PublicRoute
          exact
          path="/signup"
          component={SignupForm}
          restricted={true}
          fallback={'/'}
        />

        {/*  TODO: implement admin routes */}
        <BackOfficeRoutes />

        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
