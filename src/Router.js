import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Login from './components/login/login.component.jsx';
import Lengua from './components/lengua/modulos/lengua.component.jsx';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <HashRouter basename="/">
                    <Switch>
                        <Route history={customHistory} exact path="/" component={Login} />
                        <Route history={customHistory} exact path="/login" component={Login} />
                        <Route history={customHistory} exact path="/lengua" component={Lengua} />
                    </Switch>
                </HashRouter>
            </BrowserRouter>

        );
    }
}

export default Router;