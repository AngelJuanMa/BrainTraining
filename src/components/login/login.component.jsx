import React, { Component } from "react";
import "./login.style.sass";
import { NavLink } from "react-router-dom";
import Header from "../header/header.component.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var dirr = window.location.href;

    return (
      <React.Fragment>
        <Header></Header>
        <div id="loginComponent">
          <h1>¡Hola! Ingresá tu e‑mail o usuario</h1>

          <input type="email" placeholder="E-mail o usuario" />

          <input type="password" placeholder="Contraseña" name="password" />

          <input type="submit" name="submit" />
          <NavLink to="registro" id="createAccount">
            Crear cuenta
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
