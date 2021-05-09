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

const AppRouter = () => { 

    return (

        <Router>
            <Switch>

                <PublicRoute exact path='/users' component={ UserList } />
                <PublicRoute exact path='/contacts' component={ Contact } />
                <PublicRoute exact path='/newsform' component={ NewsForm } />
                <PublicRoute exact path='/' component={ Home } />

                { /*  Restricted routes for logged users */ }
                <PublicRoute exact path='/login' component={ Login } restricted={ true } fallback={ '/profile' } />
                <PublicRoute exact path='/signup' component={ SignupForm } restricted={ true } fallback={ '/profile' } />

                <PrivateRoute exact path='/profile' component={ Profile } />

                <Redirect to='/' />

            </Switch>
        </Router>

    )
}

export default AppRouter;
