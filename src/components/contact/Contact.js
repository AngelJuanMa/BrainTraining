import React from 'react'

class Contact extends React.Component {

    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    bioRef = React.createRef();

    state = {
        user: {}
    };




    recibirFormulario = (e) => {
        e.preventDefault();


        var user = {
            nombre: this.nombreRef.current.value,
            apellido: this.apellidoRef.current.value,
            bio: this.bioRef.current.value
        }

        console.log(this.state)
        this.setState({
            user: user
        })
        console.log(this.state)
        //console.log(this.nombre.current.value);
        //console.log(this.nombre);
        /*current.checked*/

        console.log(user)
    }



    render() {
        let name = "Ángel"
        let surname = "Carballo"

        return (
            <div id="conctact">
                <h1>Hola mi nombre es {name} y mí apellido {surname}</h1>
                <form className="mid_form" onChange={this.recibirFormulario} onSubmit={this.recibirFormulario}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" ref={this.nombreRef} />
                    <input type="text" name="nombre" ref={this.apellidoRef} />
                    <input type="text" name="nombre" ref={this.bioRef} />
                    <input type="submit" />
                </form>
                <p>{this.state.user.nombre}</p>
                <p>{this.state.user.apellido}</p>
                <p>{this.state.user.bio}</p>
            </div>
        )
    }


}

export default Contact;