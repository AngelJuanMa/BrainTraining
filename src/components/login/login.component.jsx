import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
//import "./login.style.sass";

class Login extends Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem("identity"));

    this.state = {
      num: null,
      numerosCant: 2,
      numerosCantActual: 2,
      bien: 0,
      mal: 0,
      puntuacion: 0,
      identity: user,
      ver: true,
      clear: false
    };
  }

  answer = React.createRef();
  name = React.createRef();

  incrementNumber = (e) => {
    var cantidadDeNumeros = this.state.numerosCant;
    this.setState({
      numerosCant: cantidadDeNumeros + 1
    })
  }

  decrementNumber = (e) => {
    var cantidadDeNumeros = this.state.numerosCant;
    if (cantidadDeNumeros == 2) return alert('demasiado');
    this.setState({
      numerosCant: cantidadDeNumeros - 1
    })
  }

  randomNumber = () => {
    var lista = []
    for (var i = 0; i < this.state.numerosCant; i++) {
      var number = Math.ceil(Math.random() * (9 - 0) + 0);
      lista.push(number);
    }

    this.setState({
      num: lista,
      numerosCantActual: this.state.numerosCant,
      ver: true
    });

  }

  start = (e) => {
    this.randomNumber();
    this.timeOut();
    this.setState({
      puntuacion: 0,
      mal: 0,
      bien: 0
    })
  }

  timeOut = (e) => {
    const timer = setTimeout(() => {
      this.marckRecord()
    }, 90000);
    return () => clearTimeout(timer);
  }

  marckRecord = (e) => {
    console.log('hola')
    if (this.state.puntuacion > this.state.identity.record) {
      this.state.identity.record = this.state.puntuacion;
      localStorage.setItem('identity', JSON.stringify(this.state.identity))
    }
    console.log(this.state.identity)
  }

  signIn = (e) => {
    e.preventDefault();
    const timerVal = setTimeout(() => {
      this.setState({ ver: false })
    }, 1000);
    var res = this.answer.current.value
    if (res == this.state.num.join('')) {
      this.setState({
        bien: this.state.bien + 1,
        puntuacion: this.state.puntuacion + (this.state.numerosCantActual * 10),
        clear: true
      });
    }
    else this.setState({
      mal: this.state.mal + 1,
      puntuacion: this.state.puntuacion - 20,
      clear: true
    });
    this.randomNumber();
  }

  logIn = (e) => {
    e.preventDefault();
    let user = {
      alias: this.name.current.value,
      velocidad: 0,
      bien: 0,
      mal: 0,
      numeros: 0,
      palabras: 0,
      letras: 0,
      dias: 0,
      record: 0
    }
    localStorage.setItem('identity', JSON.stringify(user));
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.identity &&
            <p>Record: {this.state.identity.record}</p>
          }

          <p>Puntuación: {this.state.puntuacion}</p>
          <p>Bien: {this.state.bien}</p>
          <p>Mal: {this.state.mal}</p>
          <p>Cantidad de números: {this.state.numerosCant}</p>
          <div>
            <p>NÚMEROS</p>
            <button onClick={this.incrementNumber}>Aumentar</button>
            <button onClick={this.decrementNumber}>Bajar</button>
          </div>

          <form onSubmit={this.signIn}>
            <input type="number" ref={this.answer} placeholder="" />

            <input type="submit" name="submit" />
          </form>
          {this.state.ver &&
            <p>{this.state.num}</p>
          }

          <button onClick={this.start}>Empezar</button>
          <div>
            <p>Ingrese su nombre</p>
            <form onSubmit={this.logIn}>
              <input type="text" ref={this.name} placeholder="NOMBRE" />

              <input type="submit" name="submit" />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
