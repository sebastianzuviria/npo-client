import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from '../views/Contact';
import Home from '../views/Home';
import RestrictedRoute from './components/RestrictedRoute';
import News from '../views/News';
import DetailedNew from '../views/DetailedNew';
import DetailActivity from '../views/DetailActivity';
import BackOfficeRoutes from './BackOfficeRoutes';
import Signup from '../views/Signup';
import Login from '../views/Login';
import TestimonialForms from '../views/TestimonialForms';
import As from '../views/as'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/news" component={News} />
        <Route exact path="/news/:id" component={DetailedNew} />
        <Route exact path="/activities/:id" component={DetailActivity} />
        <Route exact path="/testimonialsform" component={TestimonialForms} />
        <Route exact path="/as" component={As} />

        {/*  Restricted routes for logged users */}
        <RestrictedRoute exact path="/login" component={Login} />
        <RestrictedRoute exact path="/signup" component={Signup} />

        <BackOfficeRoutes />
      </Switch>
    </Router>
  );
};

export default AppRouter;
