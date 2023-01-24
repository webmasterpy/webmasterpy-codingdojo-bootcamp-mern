import React, {Component} from 'react';

class PersonalCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            edad : this.props.edad
        };
    }

    aumentarEdad = () => {
        this.setState({ edad: this.state.edad+1 });
    }

    //()=>{this.setState({ edad: edad+1 })}

    render(){
        const {nombre, apellido, color} = this.props;
        const edad = this.state.edad;

        return (
            <>
            <div className="listado">
                <h1>{apellido}, {nombre}</h1>
                <p>Edad: {edad}</p>
                <p>Color: {color}</p>
                <button onClick={ () => this.aumentarEdad() }>Aumentar Edad</button>
                <br/>
            </div>
            </>
        )
    }
}

export default PersonalCard