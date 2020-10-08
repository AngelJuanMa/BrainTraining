import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './assets/App.css';
import Principal from './components/principal/principal.component.jsx';
import Memoria from './components/memoria/memoria.component.jsx';
import Lengua from './components/lengua/lengua.component.jsx';
import Ingles from './components/ingles/ingles.component.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/memoria" component={Memoria} />
            <Route exact path="/lengua" component={Lengua} />
            <Route exact path="/ingles" component={Ingles} />
            <Route exact path="**" component={Principal} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );

  }
}

export default App;