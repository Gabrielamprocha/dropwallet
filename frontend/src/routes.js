import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from'./pages/Main';
import Box from'./pages/Box';
import Create from'./pages/Create';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/box/:id" component={Box}/>
            <Route path="/create" component={Create}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
