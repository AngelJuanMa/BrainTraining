import React, { Component } from "react";

class Memoria extends Component {
  constructor(props) {
    super(props);
    let user = JSON.parse(localStorage.getItem("identity"));

    this.state = {
      num: null,
      numerosCant: 2,
      numerosCantActual: 2,
      bien: 0,
      mal: 0,
      puntuacion: 0,
      identity: user,
      ver: true,
      clear: false,
      start: false,
      stop: 0,
      letrasMay: true,
      letras: true,
      numeros: true,
      changeSpeed: 0,
      algorithm: true,
      time: 90,
      timeout: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  answer = React.createRef();
  name = React.createRef();
  velocidad = React.createRef();

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    var value;
    if (name === 'letras') value = target.checked;
    else if (name === 'numeros') value = target.checked;
    else if (name === 'letrasMay') value = target.checked;
    else if (name === 'algorithm') value = target.checked;

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
    if (cantidadDeNumeros === 2) return alert('demasiado');
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
      puntuacion: 0,
      mal: 0,
      bien: 0,
      start: true
    })
  }

  timeOut = (e) => {
    const time = setInterval(() => {
      this.setState({
        time: this.state.time - 1
      })
    }, 1000);
    const timer = setTimeout(() => {
      this.marckRecord()
      clearTimeout(time)
      this.setState({
        time: 90
      })
    }, 90000);

    return () => clearTimeout(timer);
  }

  marckRecord = (e) => {
    this.setState({
      start: false
    })
    if (this.state.puntuacion > this.state.identity.record) {
      this.state.identity.record = this.state.puntuacion;
      localStorage.setItem('identity', JSON.stringify(this.state.identity))
    }
  }

  signIn = (e) => {
    e.preventDefault();

    var stop = this.state.bien + Math.abs(this.state.mal);
    this.setState({
      stop: stop
    })
    const timerVal = setTimeout(() => {
      if (stop === this.state.stop) this.setState({ ver: false })
    }, this.state.identity.velocidad);

    var res = this.answer.current.value
    this.answer.current.value = null;
    if (res === this.state.num.join('')) {
      if (this.state.algorithm) this.changeSpeedAlgorithm("WELL");

      var value = (this.state.puntuacion + (this.state.numerosCantActual * 10) / (this.state.identity.velocidad / 1000))
      value = Math.round(value);
      this.setState({
        bien: this.state.bien + 1,
        puntuacion: value,
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

  aumentarVelocidad = (e) => {
    e.preventDefault();
    var velocidadRef = this.velocidad.current.value
    console.log(velocidadRef)
    if (isNaN(velocidadRef)) {
      this.velocidad.current.value = ''
      return alert('Ingrese solo numeros')
    }
    if (velocidadRef === "0") {
      this.velocidad.current.value = ''
      return alert('Ingrese un numero mayor a 0')
    }
    if (velocidadRef === '') return
    let nuevaVelocidad = (velocidadRef * 1000);
    this.state.identity.velocidad = nuevaVelocidad;
    this.setState({
      identity: this.state.identity
    })
    localStorage.setItem('identity', JSON.stringify(this.state.identity));
  }

  logIn = (e) => {
    e.preventDefault();
    let user = {
      alias: this.name.current.value,
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

  changeSpeedAlgorithm(answerRes) {
    var speed = this.state.changeSpeed
    var numerosCant = this.state.numerosCant
    console.log(numerosCant)
    if (answerRes === 'WELL') {
      this.setState({
        changeSpeed: speed + 1
      })
    }
    if (answerRes === 'BAD') this.setState({
      changeSpeed: speed - 1
    })

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

  render() {
    return (
      <React.Fragment>
        {this.state.identity ?
          <div>
            {this.state.identity &&
              <p>Record: {this.state.identity.record}</p>
            }
            <p>Velocidad: {(this.state.identity.velocidad / 1000)} segundo/s</p>
            <p>Puntuación: {this.state.puntuacion}</p>
            <p>Bien: {this.state.bien}</p>
            <p>Mal: {this.state.mal}</p>
            <p>Cantidad de números: {this.state.numerosCant}</p>
            <div>
              <p>NÚMEROS</p>
              <button onClick={this.incrementNumber}>Aumentar</button>
              <button onClick={this.decrementNumber}>Bajar</button>
            </div>
            <div>
              {this.state.time > 60
                ?
                <p>1:{this.state.time - 60}</p>
                :
                <p>0:{this.state.time}</p>
              }
            </div>
            <form>
              <label htmlFor="letras">Letras</label>
              <input type="checkbox" name="letras" checked={this.state.letras} onChange={this.handleInputChange} />
              <label htmlFor="numeros">Numeros</label>
              <input type="checkbox" name="numeros" checked={this.state.numeros} onChange={this.handleInputChange} />
              <label htmlFor="letrasMay">Letras con mayuscula</label>
              <input type="checkbox" name="letrasMay" checked={this.state.letrasMay} onChange={this.handleInputChange} />
            </form>

            <form>
              <label htmlFor="algorithm">Algoritmo</label>
              <input type="checkbox" name="algorithm" checked={this.state.algorithm} onChange={this.handleInputChange} />
            </form>

            {this.state.start &&
              <form onSubmit={this.signIn}>
                <input type="text" ref={this.answer} />
              </form>
            }

            {this.state.ver &&
              <p>{this.state.num}</p>
            }
            {!this.state.start &&
              <div>
                <p>Velocidad</p>
                <form >
                  <input type="text" onChange={this.aumentarVelocidad} ref={this.velocidad} placeholder="" />
                </form>
                <button onClick={this.start}>Empezar</button>
              </div>
            }


          </div>

          : <div>
            <p>Ingrese su nombre</p>
            <form onSubmit={this.logIn}>
              <input type="text" ref={this.name} placeholder="NOMBRE" />

              <input type="submit" name="submit" />
            </form>
          </div>
        }

      </React.Fragment>
    );
  }
}

export default Memoria;
