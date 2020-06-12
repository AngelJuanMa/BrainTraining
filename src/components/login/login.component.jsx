import React, {Component} from 'react'
import './login.style.sass';

class Login extends Component {
    render(){

        return(
            <div id="loginComponent">
                <h1>¡Hola! Ingresá tu e‑mail o usuario</h1>

                <input type="email" placeholder="E-mail o usuario"/>

                <input type="password" placeholder="Contraseña" name="password"/>

                <input type="submit" name="submit"/>
                <p id="createAccount">Crear cuenta</p>
            </div>
        )
    }
}

export default Login