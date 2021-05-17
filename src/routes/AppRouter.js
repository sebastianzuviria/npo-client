import React from 'react';

import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Contact from '../views/Contact';
import NewsForm from '../components/NewsForm/NewsForm';
import Home from '../views/Home';
import UserList from '../views/UserList';
import SignupForm from '../components/SignupForm/SignupForm';
import Profile from '../components/Profile/Profile';
import Login from '../components/Login/Login';
import PublicRoute from './components/PublicRoute';
import News from '../views/News';
import DetailedNew from '../views/DetailedNew';
import UpdateformOrganization from '../components/UpdateOrganization/UpdateOrganization';
import DetailActivity from '../views/DetailActivity'
import FormActivities from '../components/FormActivities/Form'
import ActivitiesList from '../views/ActivitiesList'
import TestimonialsList from '../components/TestimonialsList/TestimonialsList';
import TestimonialsForm from '../components/TestimonialsForm/TestimonialsForm';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/users' component={UserList} />
        <PublicRoute exact path='/contacts' component={Contact} />
        <PublicRoute exact path='/novedades' component={News} />
        <PublicRoute exact path='/activities/:id' component={DetailActivity} />
        <PublicRoute exact path='/' component={Home} />

        {/*  Restricted routes for logged users */}
        <PublicRoute
          exact
          path='/login'
          component={Login}
          restricted={true}
          fallback={'/profile'}
        />
        <PublicRoute
          exact
          path='/signup'
          component={SignupForm}
          restricted={true}
          fallback={'/profile'}
        />

        {/*  Private routes for logged users */}
        <PrivateRoute exact path='/profile' component={Profile} />


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

        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default AppRouter;
