import React from 'react'

const ListadoCajas = (props) => {
  
    const estilos = {
        //${props.size} || ${props.size}
        height: `${props.size}px`,
        width: `${props.size}px`,
        backgroundColor: props.color,
        display: 'inline-block',
        margin: '10px'
    }

    return (
        <div style={estilos}></div>
    );
}

export default ListadoCajas