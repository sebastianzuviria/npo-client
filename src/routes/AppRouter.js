import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import UserList from '../views/UserList';
import Contact from '../views/Contact';
import Home from '../views/Home';
import SignupForm from '../components/SignupForm/SignupForm';
import Profile from '../components/Profile/Profile';
import NewsForm from '../components/NewsForm/NewsForm';
import News from '../views/News';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/users" component={UserList} />
        <Route exact path="/contacts" component={Contact} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/newsform" component={NewsForm} />
        <Route exact path="/novedades" component={News} />
        <Route exact path="/" component={Home} />
        {/* TODO: use a real component, when the project grows up 
                    Create private and public routes */}
        {/* Examples PrivateRoute 

                    <PrivateRoute path='/backoffice/users role='Admin'>
                        <UserList />
                    </PrivateRoute>

                    <PrivateRoute role='Standard'>
                        <Profile />
                    </PrivateRoute>
                    */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
