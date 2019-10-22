import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import { Coffee } from '../pages';

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:name" exact component={Coffee} />
        </Switch>
    );
};

export default App;
