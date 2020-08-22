import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
//import "./login.style.sass";
import { NavLink } from "react-router-dom";

class Lengua extends Component {
    constructor(props) {
        super(props);
        let user = JSON.parse(localStorage.getItem("identity"));

    }

    render() {
        return (
            <React.Fragment>
                <p>Parte 1</p>
                <NavLink to="/">
            IR
          </NavLink>
            </React.Fragment>
        );
    }
}

export default Lengua;
