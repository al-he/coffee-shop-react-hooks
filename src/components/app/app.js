import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Card from '../card';
import { Coffee } from '../pages';

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:name" exact component={Coffee} />
            <Route path="/:name/:name" exact component={Card} />
        </Switch>
    );
};

export default App;
