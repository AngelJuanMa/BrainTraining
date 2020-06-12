import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import Login from './components/login/login.component.jsx';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header></Header>
                <Switch>
                <Route exact path="**" component={Login} />
                    <Route exact path="/login" component={Login} />
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
            
        );
    }
}

export default Router;