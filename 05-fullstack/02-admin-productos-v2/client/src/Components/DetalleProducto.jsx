import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, Navigate } from 'react-router-dom';

const DetalleProducto = () => {

    //const {recibidos, setRecibidos} = props;
    const {id} = useParams();
    const [producto, setProducto] = useState({});
    const [existe, setExiste] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/producto/${id}`)
            .then(res => {
                setProducto(res.data.productos);
                setExiste(true);
            })
            .catch(err => {setExiste(false)});
    },[id]);

    console.log(existe);

    return (
        <>
        {
            (existe) 
            ?
            <div>
                <p>Titulo: {producto.titulo}</p>
                <p>Precio: {producto.precio}</p>
                <p>Precio: {producto.descripcion}</p>
                <a href="/">Volver a Carga</a>
            </div>
            :
            <Navigate to="/"/>
        }
        </> 
    )
}

export default DetalleProducto;