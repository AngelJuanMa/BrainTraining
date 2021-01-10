import React, { Component } from "react";
import "./Introduccion.style.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faQuestion
} from "@fortawesome/free-solid-svg-icons";

class Introduccion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            part1: true,
            part2: false,
            part3: false,
            part4: false,
            part5: false,
            block: true,
            inQuestion: false
        };
    }

    answerRef = React.createRef();

    next = (e) => {
        if (this.state.part1) {
            this.setState({
                part1: false,
                part2: true,
                inQuestion: true
            })
        } else if (this.state.part2) {
            this.setState({
                part2: false,
                part3: true,
                inQuestion: false
            })
        }
    }

    back = (e) => {
        if (this.state.part2) {
            this.setState({
                part1: true,
                part2: false,
                inQuestion: false
            })
        } else if (this.state.part3) {
            this.setState({
                part2: true,
                part3: false,
                inQuestion: true
            })
        }
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
                    <h1>Introducción</h1>
                </main>
                <div className="status">
                    <FontAwesomeIcon className="iconMenu play" id="now" icon={faCaretRight} />
                    <FontAwesomeIcon className="iconMenu noFirst question" icon={faQuestion} />
                </div>
                <div className="cart">
                    <div className="block-1">
                        {this.state.part1 &&
                            <div className="study">


                                <div className="text">
                                    <h2>Acento</h2>
                                    <div className="sector">
                                        <p>El acento es la pronunciación más fuerte de una sílaba respecto a todas las demás de la palabra.</p>
                                    </div>

                                    <div className="sector">
                                        <p>El acento gráfico o tilde es el signo que indica qué sílaba se acentúa</p>
                                    </div>

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
                            <div className="questions">
                                <div className="text">
                                    <p className="the">La tilde es utilizada para:</p>
                                    <div className="question">
                                        <form onSubmit={this.submitAnswer}>
                                            <p>
                                                <input type="radio" id="1" name="correct" value="male2" />
                                                <label for="1">Marcar las palabras</label>
                                            </p>
                                            <p>
                                                <input type="radio" name="correct" value="male1" />
                                        Marca donde se acentua la palabra
                                    </p>
                                            <p>
                                                <input type="radio" name="correct" value="male3" />
                                        Indica la letra
                                    </p>
                                        </form>
                                    </div>
                                </div>

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
                                <button onClick={this.next.bind(this, 2)}>VOLVER</button>
                            </div>
                        }
                        {this.state.part4 &&
                            <div>

                                <h1>123456</h1>

                                <p>aabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbcc</p>

                                <button>Siguiente</button>
                                <button onClick={this.bind(this, 3)}>VOLVER</button>
                            </div>
                        }
                    </div>
                    <div className="block-2">
                        {!this.state.inQuestion ?
                            <button onClick={this.next}>SIGUIENTE</button>
                            :
                            <button id="check" onClick={this.next}>COMPROBAR</button>
                        }
                        
                        {!this.state.part1 &&
                            <button id="back" onClick={this.back}>VOLVER</button>
                        }
                    </div>

                </div>

            </div >
        );
    }
}

export default Introduccion;
