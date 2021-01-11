import React, { Component } from "react";
import "./nav.style.sass";
import { NavLink } from "react-router-dom";

class Nav extends Component {

    render() {
        return (
            <div id="main">
                <div id="header">
                    <h1>BRAIN TRAINING</h1>
                    <span id="span1"><span id="span2"></span></span>
                </div>
                <div id="nav">
                    <div className="components" id="primero">
                        <div className="cuadrado" id="comp1">
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/Memory">
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
                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/English">
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

export default Nav;
