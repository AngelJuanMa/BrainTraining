import React, { Component } from 'react';
import './assets/App.css';
import Memoria from './components/memoria/memoria.component.jsx';
import Lengua from './components/lengua/lengua.component.jsx';
import Ingles from './components/ingles/ingles.component.jsx';

class App extends Component {
  state = {
    memoria: false,
    lengua: false,
    ingles: false,
    inComponent: 0
  }

  goComponent(e) {

    switch (e) {
      case 1:
        this.setState({
          memoria: true,
          inComponent: 1
        })
        break;

      case 2:
        this.setState({
          lengua: true,
          inComponent: 2
        })
        break;

      case 3:
        this.setState({
          ingles: true,
          inComponent: 3
        })
        break;
    }
  }

  turnBack = (e) => {
    this.setState({
      lengua: false,
      ingles: false,
      memoria: false,
      inComponent: 0
    })
  }

  render() {
    return (
      <div className="App">
        <h1>1</h1>
        { this.state.inComponent > 0 &&
          <button onClick={this.turnBack}>Atras</button>
        }
        {(() => {
          switch (this.state.inComponent) {
            case 1: return <Memoria></Memoria>;
            case 2: return <Lengua></Lengua>;
            case 3: return <Ingles></Ingles>;
            default:
              return <div>
                <button onClick={this.goComponent.bind(this, 1)}>Memoria</button>
                <button onClick={this.goComponent.bind(this, 2)}>Lengua</button>
                <button onClick={this.goComponent.bind(this, 3)}>Ingles</button>
              </div>;

          }
        })()}
      </div>
    );

  }
}

export default App;