import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar';

const ActualizarProducto = (props) => {
    const { id } = useParams();
    const [titulo, setTitulo] = useState();
    const [precio, setPrecio] = useState();
    const [descripcion, setDescripcion] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/producto/' + id)
            .then(res => {
                setTitulo(res.data.productos.titulo);
                setPrecio(res.data.productos.precio);
                setDescripcion(res.data.productos.descripcion);
            })
    }, [id]);

    const actualizarProducto = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/productos/update/' + id, {
            titulo,
            precio,
            descripcion
        })
            .then(res => alert('Editado correctamente.'));
        navigate("/producto/editar/"+id);
        // navigate("/");
    }
    return (
        <>
        <Navbar logo={props.logo}/>
        <div className='container mt-5 col-6 text-left'>
            <h1>Actualizar Productos</h1>
            <form onSubmit={actualizarProducto}>
                <p>
                    <label>Titulo</label>
                    <input type="text" 
                    className="form-control"
                    name="titulo" 
                    value={titulo || ''}
                    onChange={(e) => { setTitulo(e.target.value) }} />
                </p>
                <p>
                    <label>Precio</label>
                    <input type="text" 
                    className="form-control"
                    name="precio"
                    value={precio || ''}
                    onChange={(e) => { setPrecio(e.target.value) }} />
                </p>
                <p>
                    <label>Descripcion</label>
                    <input type="text" 
                    className="form-control"
                    name="descipcion"
                    value={descripcion || ''}
                    onChange={(e) => { setDescripcion(e.target.value) }} />
                </p>
                <Link to={'/'} className='btn btn-danger'>Volver</Link>
                {" "}
                <button className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
        </>
    )
}

export default ActualizarProducto