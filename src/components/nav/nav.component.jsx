import React, { Component } from "react";
import './nav.component.sass';

class Nav extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            sliderBool: false
        };
      }

    showSlider = (e) => {
        var value = this.state.sliderBool === false ? true : false;
        this.setState({
            sliderBool: value,
        });
        console.log(value)
    }

    render() {
        return (
            <React.Fragment>
                <nav>
                    <div>

                    </div>
                    <div id="links">
                        <span onMouseEnter={this.showSlider} onClick={this.showSlider}>Categorías</span>
                        <span>Ofertas</span>
                        <span>Historial</span>
                        <span>Tiendas oficiales</span>
                        <span>Vender</span>
                        <span>Ayuda</span>
                    </div>
                    <span id="account">Mi cuenta</span>
                </nav>
                {this.state.sliderBool &&
                    (
                        <div id="categorias">
                            <ul>
                                <span>
                                    <li>Ropa</li>
                                    <li>Tecnologías</li>
                                    <li>Vehiculos</li>
                                    <li>Libros</li>
                                    <li>Inmuebles</li>
                                    <li>Juguetes</li>
                                </span>
                            </ul>
                        </div>
                    )}

            </React.Fragment>
        );
    }
}

export default Nav
