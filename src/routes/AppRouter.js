import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import UserList from '../views/UserList';
import Home from '../views/Home';

const AppRouter = () => {
    return (

        <Router>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/backoffice/users' component={ UserList } />
                { 
                    /* TODO: use a real component, when the project grows up 
                    Create private and public routes */ 
                }
                {
                    /* Examples PrivateRoute 

                    <PrivateRoute path='/backoffice/users role='Admin'>
                        <UserList />
                    </PrivateRoute>

                    <PrivateRoute role='Standard'>
                        <Profile />
                    </PrivateRoute>
                    */
                }
                <Redirect to='/' />
            </Switch>
        </Router>

    )
}

export default AppRouter;
