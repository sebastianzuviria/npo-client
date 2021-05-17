import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from '../views/Contact';
import Home from '../views/Home';
import RestrictedRoute from './components/RestrictedRoute';
import News from '../views/News';
import DetailedNew from '../views/DetailedNew';
import UpdateformOrganization from '../components/UpdateOrganization/UpdateOrganization';
import DetailActivity from '../views/DetailActivity'
import FormActivities from '../components/FormActivities/Form'
import ActivitiesList from '../views/ActivitiesList'
import TestimonialsList from '../components/TestimonialsList/TestimonialsList';
import TestimonialsForm from '../components/TestimonialsForm/TestimonialsForm';
import BackOfficeRoutes from './BackOfficeRoutes';
import Signup from '../views/Signup';
import Login from '../views/Login';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/news" component={News} />
        <Route exact path="/news/:id" component={DetailedNew} />
        <Route exact path="/activities/:id" component={DetailActivity} />

        {/*  Restricted routes for logged users */}
        <RestrictedRoute exact path="/login" component={Login} />
        <RestrictedRoute exact path="/signup" component={Signup} />


        {/*  TODO: implement admin routes */}

        <PrivateRoute exact path='/newsform' component={NewsForm} />
        <PrivateRoute exact path='/novedades/:id' component={DetailedNew} />
        <PrivateRoute
          exact
          path='/updateorganization'
          component={UpdateformOrganization}
        />
        <PublicRoute
          exact
          path='/testimonialsform'
          component={TestimonialsForm}
        />
        <PublicRoute exact path='/FormActivities' component={FormActivities} />
        <PublicRoute
          exact
          path='/backoffice/activities'
          component={ActivitiesList}
        />
        <PublicRoute exact path="/backoffice/testimonials" component={ TestimonialsList } />

        <BackOfficeRoutes />
      </Switch>
    </Router>
  );
};

export default AppRouter;
