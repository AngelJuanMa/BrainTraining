import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import Header from "../header/header.component.jsx";
import "./register.style.sass";

class Register extends Component {
  nameRef = React.createRef();
  surnameRef = React.createRef();
  passwordRef = React.createRef();
  emailRef = React.createRef();

  state = {
    redirect: false
  }

  registry = (e) => {
    e.preventDefault();
    let user = {
      name: this.nameRef.current.value,
      surname: this.surnameRef.current.value,
      password: this.passwordRef.current.value,
      email: this.emailRef.current.value
    }
    localStorage.setItem('identity', JSON.stringify(user));
    this.setState({ redirect: true })
  }

  render() {
    if(localStorage.getItem('identity'))  this.setState({ redirect: true })
    if(this.state.redirect) return <Redirect to='/' />
    return (
      <React.Fragment>
        <Header></Header>
        <div id="registerComponent">
          <h1>REGISTRO</h1>
          <form onSubmit={this.registry}>
            <input type="text" ref={this.nameRef} placeholder="Nombre" />
            <input type="text" ref={this.surnameRef} placeholder="Apellido" />
            <input type="email" ref={this.emailRef} placeholder="Email"/>
            <input type="password" ref={this.passwordRef} placeholder="Contraseña"/>
            <input type="submit" name="submit" />
          </form>
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