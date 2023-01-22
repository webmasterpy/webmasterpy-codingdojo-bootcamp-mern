import React, {Component} from 'react'

class PersonCard extends Component {
    render(){
        const { nombre, apellido, year, color} = this.props

        return(
            <>
            <h1>{`${apellido}, ${nombre}`}</h1>
            <p>Año: {year}</p>
            <p>Color: {color}</p>
            </>
        )
    }
}

export default PersonCard