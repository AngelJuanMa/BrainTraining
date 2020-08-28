import React, { Component } from "react";
//import "./login.style.sass";
import Modulo1 from "./modulos/lengua.component";

class Lengua extends Component {
    constructor(props) {
        super(props);
        let user = JSON.parse(localStorage.getItem("identity"));

    }

    render() {
        return (
            <React.Fragment>
                <p>Parte 1</p>
            IR
            <Modulo1></Modulo1>
            </React.Fragment>
        );
    }
}

export default Lengua;
