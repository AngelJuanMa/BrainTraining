import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
//import "./login.style.sass";

class Lengua extends Component {
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
        }else alert('INCORRECT')

    }

    render() {
        return (
            <React.Fragment>
                {this.state.part1 &&
                    <div>

                        <h1>123</h1>

                        <p>aabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbccaabbcc</p>

                        <button onClick={this.next.bind(this, 1)}>Siguiente</button>
                        <button >Volver</button>
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
            </React.Fragment>
        );
    }
}

export default Lengua;
