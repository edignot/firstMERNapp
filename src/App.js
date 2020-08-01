import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
    return (
        <div>
            <Switch>
                <Route path='/' exact>
                    <Users />
                </Route>
                <Route path='/places/new' exact>
                    <NewPlace />
                </Route>
                <Redirect to='/' />
            </Switch>
        </div>
    );
}

export default App;
