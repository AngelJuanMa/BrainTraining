import React, {Component} from 'react';

class MiComponente extends Component{

    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon codido'],
            calorias: 400
            }

        return(
            <React.Fragment>
                <h1>Hola, soy el componente llamado: MiComponente</h1>
                <p>Estoy probrando el componente</p>
                <p>{'Receta: ' + receta.nombre}</p>
                <ol>
                {
                    receta.ingredientes.map((ingrediente, i) => {
                        
                        return(
                            <li key={i}>
                                {ingrediente}
                            </li>
                        );
                    })
                }
                </ol>
                <p>{'Calorias: ' + receta.calorias}</p>
            </React.Fragment>
            /*
            <div className="mi-componente">
            <h2>Segunda forma de:</h2>
            <p>retornar mas de una etiqueta</p>
            </div>
            */
        );
    }
}

export default MiComponente;