import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../header/header.component.jsx";
import "./register.style.sass";

class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div id="registerComponent">
          <h1>REGISTRO</h1>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="password" placeholder="Contraseña" name="" id="" />
          <input type="email" placeholder="Email" name="" id="" />
          <input type="submit" name="submit" />
          <span id="loginDiv">
            Ya tienes una cuenta, 
            <NavLink to="login" id="loginhref"> inicia sesión</NavLink>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
