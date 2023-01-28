import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Navbar from '../Views/Navbar';
import ListaProductos from './ListaProductos';

const FormularioProducto = (props) => {

    const [titulo, setTitulo] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const navigate = useNavigate();

    const onHandlerSubmit = (e)=> {
        e.preventDefault();
        axios.post("http://localhost:8000/api/productos/new/",{
            titulo,
            precio,
            descripcion
        })
            .then(res => { navigate("/#load") })
            .catch(err => console.log(err))
    }

    
    return (
        <>
        <Navbar logo={props.logo}/>
        <div className='container mt-5 col-6 text-left'>
            <form onSubmit={onHandlerSubmit}>
                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" className="form-control" id="titulo" aria-describedby="tituloHelp" onChange={(e)=>setTitulo(e.target.value)} value={titulo}/>
                    {/* <small id="tituloHelp" className="form-text text-muted">Mensaje</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input type="text" className="form-control" id="precio" onChange={(e)=>setPrecio(e.target.value)} value={precio}/>
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripcion</label>
                    <input type="text" className="form-control" id="descripcion" onChange={(e)=>setDescripcion(e.target.value)} value={descripcion}/>
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
        <hr/>
        <ListaProductos/>
        </>
    )
}

export default FormularioProducto