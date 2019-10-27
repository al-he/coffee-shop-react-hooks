import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Card from '../card';
import NotFound from '../404';
import Contact from '../contact';
import ThankPage from '../pages/thank';
import { Coffee } from '../pages';

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/not-found/" exact component={NotFound} />
            <Route path="/contacts/" exact component={Contact} />
            <Route path="/thank/" exact component={ThankPage} />
            <Route path="/:name" exact component={Coffee} />
            <Route path="/:name/:name" exact component={Card} />
        </Switch>
    );
};

export default App;
