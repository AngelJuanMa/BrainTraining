import React, { Component } from "react";
import "./principal.style.sass";
import { NavLink, Redirect } from "react-router-dom";

class Principal extends Component {

    render() {
        return (
            <div id="principal">
                <h1>TITULO</h1>
                <div className="components">
                    <NavLink to="/memoria">
                        <div className="cuadrado">

                            <p>1</p>

                        </div>
                    </NavLink>
                </div>
                <div className="components">
                    <div className="cuadrado">
                        <NavLink to="/lengua">
                            <p>1</p>
                        </NavLink>
                    </div>
                </div>
                <div className="components">
                    <div className="cuadrado">
                        <NavLink to="/ingles">
                            <p>1</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Principal;
