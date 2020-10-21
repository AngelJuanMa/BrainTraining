import React, { Component } from "react";
import "./lengua.style.sass";
import { NavLink, Redirect } from "react-router-dom";

class Lengua extends Component {
    constructor(props) {
        super(props);
        let user = JSON.parse(localStorage.getItem("identity"));

    }

    render() {
        return (
            <div id="Lengua">
                {/*
                    <div id="header">
                    <h1>Ortografía</h1>
                </div>
                */}

                <div id="nav">
                    <div id="primero">
                        <div className="component">
                            <div className="circulo">
                                <NavLink to="/Introducción">
                                    <div className="cuadrado2">
                                    </div>
                                </NavLink>
                            </div>
                            <p>Introducción</p>
                        </div>
                    </div>
                    <div id="segund2">
                        <div id="segundo">
                            <div className="component">
                                <div className="circulo">
                                    <NavLink to="/Introducción">
                                        <div className="cuadrado2">
                                        </div>
                                    </NavLink>
                                </div>
                                <p>Tonicas y atonas</p>
                            </div>
                            <div className="component" id="cuadrados">
                                <div className="circulo" id="circulo2">
                                    <NavLink to="/Introducción">
                                        <div className="cuadrado2">
                                        </div>
                                    </NavLink>
                                </div>
                                <p>Silabas</p>
                            </div>
                        </div>
                    </div>
                    <div id="tercer2">
                        <div id="tercero">
                            <div className="component">
                                <div className="circulo">
                                    <NavLink to="/Introducción">
                                        <div className="cuadrado2">
                                        </div>
                                    </NavLink>
                                </div>
                                <p>Agudas</p>
                            </div>
                            <div className="component">
                                <div className="circulo" id="circulo3">
                                    <NavLink to="/Introducción">
                                        <div className="cuadrado2">
                                        </div>
                                    </NavLink>
                                </div>
                                <p>Signos de puntuación</p>
                            </div>
                            <div className="component">
                                <div className="circulo">
                                    <NavLink to="/Introducción">
                                        <div className="cuadrado2">
                                        </div>
                                    </NavLink>
                                </div>
                                <p>Preposiciones</p>
                            </div>
                        </div>
                    </div>

                    <div id="cuarto">
                        <div className="component">
                            <div className="circulo">
                                <NavLink to="/Introducción">
                                    <div className="cuadrado2">
                                    </div>
                                </NavLink>
                            </div>
                            <p>Test</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Lengua;
