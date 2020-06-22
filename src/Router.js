import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Footer from './components/footer/footer.component.jsx';
import Login from './components/login/login.component.jsx';
import Register from './components/register/register.component.jsx';
import Main from './components/main/main.component.jsx';
import redirect from './components/redirect/redirect.component.jsx';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <HashRouter basename="/">
                    <Switch>
                        <Route history={customHistory} exact path="/" component={Main} />
                        <Route history={customHistory} exact path="/login" component={Login} />
                        <Route history={customHistory} exact path="/registro" component={Register} />
                        <Route history={customHistory} exact path="" component={redirect} />
                    </Switch>
                </HashRouter>
                <Footer></Footer>
            </BrowserRouter>

        );
    }
}

export default Router;