import React, {Component} from 'react';

class PersonalCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            edad : this.props.edad
        };
    }

    // aumentarEdad = () => {
    //     this.setState({ edad: edad+1 }
    // };

    render(){
        const {nombre, apellido, color} = this.props;
        const edad = this.state.edad;

        return (
            <>
            <div className="listado">
                <h1>{apellido}, {nombre}</h1>
                <p>Edad: {edad}</p>
                <p>Color: {color}</p>
                <button onClick={ ()=>{this.setState({ edad: edad+1 })} } type="button">Aumentar Edad</button>
                <br/>
            </div>
            </>
        )
    }
}

export default PersonalCard