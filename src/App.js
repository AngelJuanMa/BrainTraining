import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './assets/App.css';
import Principal from './components/principal/principal.component.jsx';
import Memoria from './components/memoria/memoria.component.jsx';
import Lengua from './components/lengua/lengua.component.jsx';
import Ingles from './components/ingles/ingles.component.jsx';
import Introducción from './components/lengua/modulos/Introduccion';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/Memoria" component={Memoria} />
            <Route exact path="/Lengua" component={Lengua} />
            <Route exact path="/Ingles" component={Ingles} />
            <Route exact path="/Introducción" component={Introducción} />
            <Route exact path="/Tonicas" component={Ingles} />
            <Route exact path="/Silabas" component={Ingles} />
            <Route exact path="/Agudas" component={Ingles} />
            <Route exact path="/Puntuación" component={Ingles} />
            <Route exact path="/Preposiciones" component={Ingles} />
            <Route exact path="/Test" component={Ingles} />
            <Route exact path="**" component={Principal} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );

  }
}

export default App;