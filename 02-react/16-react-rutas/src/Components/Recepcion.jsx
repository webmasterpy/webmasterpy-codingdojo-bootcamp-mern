import React from 'react'
import { useParams } from 'react-router-dom';

const Recepcion = () => {
    const { texto, color, fondo } = useParams();

    let esNumero = true;
    if(isNaN(texto)){
        esNumero = false;
    }

    const styledPage = {
        color: `${color}`,
        backgroundColor: `${fondo}`,
    };

    return (
        <>
        <div className='container-fluid' style={{marginTop:"10px"}}>
            <div className="card">
            {
                esNumero ? 
                    <div className="card-body" style={ styledPage }>El numero es: <b>{texto}</b></div> : 
                    <div className="card-body" style={ styledPage }>El texto es: <b>{texto}</b></div>
            }
            </div>    
        </div>
        </>
    )
}

export default Recepcion