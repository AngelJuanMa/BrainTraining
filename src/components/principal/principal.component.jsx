import React, { Component } from "react";
import "./principal.style.sass";
import { NavLink, Redirect } from "react-router-dom";

class Principal extends Component {

    render() {
        return (
            <div id="main">
                <div id="header">
                    <h1>TITULO</h1>
                </div>
                <div id="nav">
                    <div className="components">
                        <div className="cuadrado">
                            <NavLink to="/memoria">
                                <div className="cuadrado2">
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="components" id="cuadrados">
                        <div className="cuadrado" >
                            <NavLink to="/lengua">
                                <div className="cuadrado2">
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="components">
                        <div className="cuadrado">
                            <NavLink to="/ingles">
                                <div className="cuadrado2">
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
