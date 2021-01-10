import React, { Component } from "react";
import "./lengua.style.sass";
import { NavLink } from "react-router-dom";

class Lengua extends Component {

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
                                <div className="circulo" class="circulo1">
                                    <NavLink to="/Introducción">
                                        <div className="cuadrado2">
                                        </div>
                                    </NavLink>
                                    <p>Tonicas y atonas</p>
                                </div>
                                
                            </div>
                            <div className="component" id="cuadrados">
                                <div className="circulo" class="circulo2">
                                    <NavLink to="/Introducción">
                                        <div className="cuadrado2">
                                        </div>
                                    </NavLink>
                                    <p>Silabas</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div id="tercer2">
                        <div id="tercero">
                            <div className="component">
                                <div className="circulo" class="circulo1">
                                    <NavLink to="/Introducción">
                                        <div className="cuadrado2">
                                        </div>
                                    </NavLink>
                                    <p>Agudas</p>
                                </div>
                                
                            </div>
                            <div className="component">
                                <div className="circulo"  class="circulo2">
                                    <NavLink to="/Introducción">
                                        <div className="cuadrado2">
                                        </div>
                                    </NavLink>
                                    <p>Preposiciones</p>
                                </div>
                                
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
