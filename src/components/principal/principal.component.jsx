import React, { Component } from "react";
import "./principal.style.sass";
import { NavLink, Redirect } from "react-router-dom";

class Principal extends Component {

    render() {
        return (
            <div id="main">
                <div id="header">
                    <h1>BrainTraining</h1>
                </div>
                <div id="nav">
                    <div className="components" id="primero">
                        <div className="cuadrado" id="comp1">
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/memoria">
                                <div className="cuadrado2">
                                    <p>Memoria</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="components" id="cuadrados">
                        <div className="cuadrado" id="comp2" >
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/lengua">
                                <div className="cuadrado2">
                                    <p>Ortogría</p>
                                </div>
                            </NavLink>

                        </div>
                    </div>
                    <div className="components">
                        <div className="cuadrado" id="comp3">
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/ingles">
                                <div className="cuadrado2">
                                    <p>Ingles</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Principal;
