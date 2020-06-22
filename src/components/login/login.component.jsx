import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import Header from "../header/header.component.jsx";
import "./login.style.sass";

class Login extends Component {
  state = {
    redirect: false
  }

  email = React.createRef();
  password = React.createRef();

  signIn = (e) => {
    e.preventDefault();
    let user = {
      email: this.email.current.value,
      password: this.password.current.value
    } 
    localStorage.setItem('identity', JSON.stringify(user))
    this.setState({ redirect: true })
  }

  render() {
    if (localStorage.getItem('identity')) this.setState({ redirect: true });
    if (this.state.redirect) return <Redirect to='/' />

    return (
      <React.Fragment>
        <Header></Header>
        <div id="loginComponent">
          <h1>¡Hola! Ingresá tu e‑mail o usuario</h1>
          <form onSubmit={this.signIn}>
            <input type="email" ref={this.email} placeholder="E-mail o usuario" />

            <input type="password" ref={this.password} placeholder="Contraseña" name="password" />

            <input type="submit" name="submit" />
          </form>
          <NavLink to="registro" id="createAccount">
            Crear cuenta
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
