import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./Introduccion.style.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faQuestion
} from "@fortawesome/free-solid-svg-icons";

class Introduccion extends Component {
    constructor(props) {
        super(props);
        let user = JSON.parse(localStorage.getItem("identity"));

        this.state = {
            part1: true,
            part2: false,
            part3: false,
            part4: false,
            part5: false,
            block: true
        };
    }

    answerRef = React.createRef();

    next = (e) => {
        switch (e) {
            case 1:
                this.setState({
                    part1: this.state.part1 ? false : true,
                    part2: this.state.part2 ? false : true
                })
                break;
            case 2:
                this.setState({
                    part2: this.state.part2 ? false : true,
                    part3: this.state.part3 ? false : true
                })
                break;
            case 3:
                this.setState({
                    part3: this.state.part3 ? false : true,
                    part4: this.state.part4 ? false : true
                })
                break;
            case 4:
                this.setState({
                    part4: this.state.part4 ? false : true,
                    part5: this.state.part5 ? false : true
                })
                break;
            case 5:
                this.setState({
                    part5: this.state.part5 ? false : true
                })
                break;
        }
        this.setState({
            block: true
        })
    }

    submitAnswer = (e) => {
        e.preventDefault();
        var answer = this.answerRef.current.value;
        var answer1 = 'aabb';
        var answer2 = 'aaff';
        if (answer === answer1 || answer === answer2) {
            alert('CORRECT')
            this.setState({
                block: false
            })
        } else alert('INCORRECT')

    }

    render() {
        return (
            <div id="introduccion">
                <main>
                    <h1>Introduccion</h1>
                </main>
                <div className="status">
                    <FontAwesomeIcon className="iconMenu" className="play" id="now" icon={faCaretRight} />
                    <FontAwesomeIcon className="iconMenu" className="noFirst" className="question" icon={faQuestion} />
                </div>
                <div className="cart">
                    <div className="block-1">
                        {this.state.part1 &&
                            <div>


                                <div className="texto">
                                    <h2>Acento</h2>
                                    <p>El acento es la pronunciación más fuerte de una sílaba respecto a todas las demás de la palabra.</p>

                                    <p>El acento gráfico o tilde es el signo que indica qué sílaba se acentúa</p>
                                    <span className="ejemplo">
                                        <p>-árbol</p>
                                    </span>

                                    <span className="tip">
                                        <p>Las palabras tónicas pueden presentar únicamente una tilde y, siempre, sobre una vocal.</p>
                                    </span>
                                </div>


                            </div>
                        }
                        {this.state.part2 &&
                            <div>

                                <h1>1234</h1>
                                <p>Las 4 primeras letras que se mostraban eran...</p>
                                <form onSubmit={this.submitAnswer}>
                                    <input type="text" ref={this.answerRef} />
                                    <input type="submit" name="submit" />
                                </form>
                                {!this.state.block &&
                                    <button onClick={this.next.bind(this, 2)}>Siguiente</button>
                                }
                                <button onClick={this.next.bind(this, 1)}>Atras</button>
                            </div>
                        }
                        {this.state.part3 &&
                            <div>

                                <h1>12345</h1>
                                <p>Elije la respuesta correcta</p>
                                <form onSubmit={this.submitAnswer}>
                                    <input type="text" ref={this.answerRef} />
                                    <input type="submit" name="submit" />
                                </form>

                                {!this.state.block &&
                                    <button onClick={this.next.bind(this, 3)}>Siguiente</button>
                                }
                                <button onClick={this.next.bind(this, 2)}>Atras</button>
                            </div>
                        }
                        {this.state.part4 &&
                            <div>

                                <h1>123456</h1>

                                <p>aabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbcc</p>

                                <button>Siguiente</button>
                                <button onClick={this.bind(this, 3)}>Atras</button>
                            </div>
                        }
                    </div>
                    <div className="block-2">

                        <button onClick={this.next.bind(this, 1)}>SIGUIENTE</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default Introduccion;
