import React, {Component} from 'react';

class Pelicula extends Component{

    render(){
        var nombre = "Angelito";
        return(
            <div id="pelicula">
                <input type="button" value="output" onClick={this.props.outputFavorita}/>
            </div>
        );
    }
}

export default Pelicula;