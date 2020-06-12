import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico.jsx';
import Pelicula from './Pelicula';

class Peliculas extends Component{
    contador = 0

    constructor(props){
        super(props);
        
        this.state = {
            received: false,
            contador: 0
        };
    }

    componentWillMount(){
        console.log("Antes de cargar el componente")
    }

    componentDidMount(){
        console.log("se ha cargargado la vista Peliculas")
    }

    componentWillUnmount(){
        console.log("se ha ocultado la vista Peliculas")
    }

    sumar(){
        this.setState({
            contador: (this.state.contador + 1)
        })
    }

    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        })
    }
    
    outputFunction = (e) => {
        console.log("recibiendo el output")
        
        this.setState({
            received: (this.state.received = true)
        })
        console.log(this.state)
      }

    render(){
        var nombre = "Angelito";
        return(
            <div id="peliculas">
                <p>{nombre}</p>
                <p>{this.state.contador}</p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar.bind(this)}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                    
                </p>
                {this.state.received ? (
                    <p>Se ha recibido algo del hijo</p>
                ) : (
                    <p>No se ha recibido nada del hijo</p>
                )}
                
                <h4>{this.props.title}</h4>
                <MensajeEstatico/> 
                <Pelicula outputFavorita={this.outputFunction}></Pelicula>
            </div>
        );
    }
}

export default Peliculas;