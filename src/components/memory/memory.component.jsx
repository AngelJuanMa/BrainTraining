import React, { Component } from "react";
import "./memory.style.sass";
import Countdown from './countDown/countdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

class Memory extends Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem("identity"));


    this.state = {
      identity: user,
      bien: 0,
      mal: 0,
      score: 0,
      stop: 0,
      changeSpeed: 0,
      timeout: 0,
      numerosCant: 2,
      numerosCantActual: 2,
      time: 90,
      ver: true,
      letras: true,
      numeros: true,
      algorithm: true,
      letrasMay: true,
      clear: false,
      start: false,
      timeStart: false,
      record: null,
      num: null
    };

    if (user !== null) {
      let record = user.recrod
      this.setState({
        record: record
      })

    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  answer = React.createRef();
  name = React.createRef();
  velocidad = React.createRef();

  componentWillMount() {
    let user = JSON.parse(localStorage.getItem("identity"));
    if (user === null) {
      let user = {
        velocidad: 1000,
        bien: 0,
        mal: 0,
        numeros: 0,
        palabras: 0,
        letras: 0,
        dias: 0,
        record: 0
      }
      localStorage.setItem('identity', JSON.stringify(user));
      this.setState({
        identity: user
      })
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    var value;

    let cantOfTrue = 0
    if (this.state.letrasMay === true) cantOfTrue += 1;
    if (this.state.letras === true) cantOfTrue += 1;
    if (this.state.numeros === true) cantOfTrue += 1;
    if (cantOfTrue === 1 && target.checked === false) return ''

    if (name === 'letras') value = target.checked;
    else if (name === 'numeros') value = target.checked;
    else if (name === 'letrasMay') value = target.checked;

    this.setState({
      [name]: value
    });
  }

  incrementNumber = (e) => {
    var cantidadDeNumeros = this.state.numerosCant;
    this.setState({
      numerosCant: cantidadDeNumeros + 1
    })
  }

  decrementNumber = (e) => {
    var cantidadDeNumeros = this.state.numerosCant;
    if (cantidadDeNumeros === 2) return ""
    this.setState({
      numerosCant: cantidadDeNumeros - 1
    })
  }

  randomNumber = () => {
    var lista = []
    var letras = 'abcdefghijklmnopqrstuvwxyz';
    var letrasMay = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numeros = '0123456789';

    var characters = ''

    if (this.state.letras) characters += letras;
    if (this.state.letrasMay) characters += letrasMay;
    if (this.state.numeros) characters += numeros;

    var charactersLength = characters.length;
    for (var i = 0; i < this.state.numerosCant; i++) {
      lista.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }


    this.setState({
      num: lista,
      numerosCantActual: this.state.numerosCant,
      ver: true
    });

  }

  start = (e) => {
    this.randomNumber();
    this.timeOut();
    this.setState({
      score: 0,
      mal: 0,
      bien: 0,
      start: true
    })
    this.setState({
      timeStart: true
    })
  }

  marckRecord = (e) => {
    this.setState({
      start: false
    })
    if (this.state.score > this.state.identity.record) {
      this.state.identity.record = this.state.score;
      this.setState({
        record: this.state.score
      })
      localStorage.setItem('identity', JSON.stringify(this.state.identity))
    }
  }

  answerTheForm = (e) => {
    e.preventDefault();
    const timerVal = setTimeout(() => {
      this.setState({ ver: false })
    }, 1000);
    var stop = this.state.bien + Math.abs(this.state.mal);
    this.setState({
      stop: stop
    })
    var res = this.answer.current.value
    this.answer.current.value = null;
    if (res === this.state.num.join('')) {
      if (this.state.algorithm) this.changeSpeedAlgorithm("WELL");

      var value = (this.state.score + (this.state.numerosCantActual * 10) / (this.state.identity.velocidad / 1000))
      value = Math.round(value);
      this.setState({
        bien: this.state.bien + 1,
        score: value,
        clear: true
      });
    }
    else {
      if (this.state.algorithm) this.changeSpeedAlgorithm("BAD");

      this.setState({
        mal: this.state.mal + 1,
        clear: true
      });
    }

    this.randomNumber();
  }

  incrementSpeed = (e) => {
    this.state.identity.velocidad += 1000
    this.setState({
      identity: this.state.identity
    })
    localStorage.setItem('identity', JSON.stringify(this.state.identity));
  }

  decrementSpeed = (e) => {
    if (this.state.identity.velocidad === 1000) return null
    this.state.identity.velocidad -= 1000
    this.setState({
      identity: this.state.identity
    })
    localStorage.setItem('identity', JSON.stringify(this.state.identity));
  }


  changeSpeedAlgorithm(answerRes) {
    var speed = this.state.changeSpeed
    var numerosCant = this.state.numerosCant
    if (answerRes === 'WELL') {
      this.setState({
        changeSpeed: speed + 1
      })
    } else {
      this.setState({
        changeSpeed: speed - 1
      })
    }

    if (speed === 2) {
      this.setState({
        numerosCant: numerosCant + 1
      })
    }
    if (numerosCant > 2 && speed === -2) {
      this.setState({
        numerosCant: numerosCant - 1
      })
    }

    if (speed === 2 || speed === -2) {
      this.setState({
        changeSpeed: 0
      })
    }

  }

  timeOut = () => {
    this.setState({
      timeStart: false
    })
    this.marckRecord()
  }

  render() {
    return (
      <React.Fragment>
        <div id="memoria">
          <div id="top">
            {this.state.identity &&
              <span id="record">{this.state.identity.record}</span>
            }
            <span id="countdown">
              <Countdown time={this.state.time} timeStart={this.state.timeStart} timeOut={this.timeOut} />
            </span>

            <span id="score">{this.state.score}</span>
          </div>
          <div id="content">
            {this.state.start &&
              <div>
                <div id="result">
                  <div id="corrects">{this.state.bien}</div>
                  <div id="bads">{this.state.mal}</div>
                </div>
                {this.state.ver &&
                  <p id="quest">{this.state.num}</p>
                }

                <form id="formAns" onSubmit={this.answerTheForm}>
                  <input type="text" ref={this.answer} />
                </form>
              </div>
            }


            {!this.state.start &&
              <div id="contentStart">
                <div id="contSpeed">
                  <p>Velocidad: {(this.state.identity.velocidad / 1000)} s</p>
                  <span>
                    <button onClick={this.incrementSpeed}>
                      <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                    <button onClick={this.decrementSpeed}>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                  </span>
                </div>
                <div id="cantLetters">
                  <p>Letras y numeros: {this.state.numerosCant}</p>
                  <span>
                    <button onClick={this.incrementNumber}>
                      <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                    <button onClick={this.decrementNumber}>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                  </span>
                </div>
                <form id="form-type">

                  <span className="form-Num">
                    <input type="checkbox" name="letras" checked={this.state.letras} onChange={this.handleInputChange} />
                    <label htmlFor="letras">Letras en minuscula</label>
                  </span>

                  <span className="form-Num">
                    <input type="checkbox" name="letrasMay" checked={this.state.letrasMay} onChange={this.handleInputChange} />
                    <label htmlFor="letrasMay">Letras en mayuscula</label>
                  </span>

                  <span className="form-Num">
                    <input type="checkbox" name="numeros" checked={this.state.numeros} onChange={this.handleInputChange} />
                    <label htmlFor="numeros">Números</label>
                  </span>

                </form>

                <span id="spanStart">
                  <button id="buttonStart" onClick={this.start}>Empezar</button>
                </span>

              </div>
            }


          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Memory;
