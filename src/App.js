import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/App.css';
import Nav from './components/nav/nav.component.jsx';
import Memory from './components/memory/memory.component.jsx';
import Lengua from './components/lengua/lengua.component.jsx';
import English from './components/english/english.component.jsx';
import Introducción from './components/lengua/modules/Introduccion';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Nav} />
            <Route exact path="/Memory" component={Memory} />
            <Route exact path="/Lengua" component={Lengua} />
            <Route exact path="/English" component={English} />
            <Route exact path="/Introducción" component={Introducción} />
            <Route exact path="/Tonicas" component={English} />
            <Route exact path="/Silabas" component={English} />
            <Route exact path="/Agudas" component={English} />
            <Route exact path="/Puntuación" component={English} />
            <Route exact path="/Preposiciones" component={English} />
            <Route exact path="/Test" component={English} />
            <Route exact path="**" component={Nav} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );

  }
}

export default App;