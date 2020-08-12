import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./login.style.sass";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="loginComponent">
          <h1>¡Hola! Ingresá tu e‑mail o usuario</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
