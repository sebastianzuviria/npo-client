import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Counter } from '../features/counter/Counter';
import UserList from '../views/UserList'
import App from '../App';

const AppRouter = () => {
    return (

        <Router>
            <Switch>
                <Route exact path='/' component={ App } />
                <Route exact path='/backoffice/users' component={ UserList } />
                { 
                    /* TODO: use a real component, when the project grows up 
                    Create private and public routes */ 
                }
                <Route exact path='/counter' component={ Counter } /> 
                <Redirect to='/' />
            </Switch>
        </Router>

    )
}

export default AppRouter;
