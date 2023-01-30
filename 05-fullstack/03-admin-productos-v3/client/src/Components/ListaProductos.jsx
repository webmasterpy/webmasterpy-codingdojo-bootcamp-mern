import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const ListaProductos = () => {

    const [productos, setProductos] = useState([]);
    const [cargas, setCargas] = useState(false);
    const navigate = useNavigate();
    

    useEffect(()=>{
        // axios.get('http://localhost:8000/api/productos/')
        //     .then(res=>{
        //         //console.log("LLEGO LOS DATOS DE PRODUCTOS:", res.data)
        //         setProductos(res.data);
        //         setCargas(true);
        //     }).catch(err=>{console.log(err)});

        getListado();
    },[]);

    const getListado = async() => {
        const response = await axios.get('http://localhost:8000/api/productos/');
        setProductos(response.data);
        setCargas(true);
    }

    const borrarProducto = async (id) => {
        
        await axios.delete('http://localhost:8000/api/productos/delete/' + id)
            .then(res => {
                // console.log(id);
                getListado();
            }).catch(err=>{console.log("Error en borrado: ",err)});
    }

    // const borrarDesdeDom = (id) => {
    //     let newListado = productos.productos.filter(prd => prd._id !== id);
    //     console.log({newListado});
    //     setProductos(...productos, {productos:newListado});
    //     console.log({productos});
	// }

    console.log("Listado: ", productos.productos)

    return (
    <>
        {
        (cargas)
        ?
            <table className='table table-border table-striped'>
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                {
                    productos.productos.map((producto, index)=>{
                        let enlaceVer = "/producto/"+producto._id;
                        let enlaceEditar = "/producto/editar/"+producto._id;
                        //let enlaceBorrar = "/producto/borrar/"+producto._id;

                        return (
                            <tr key={index}>
                                <th scope="row">
                                    <Link to={enlaceVer}><button className='btn btn-success'>Ver Mas</button></Link>
                                    {" "}
                                    <Link to={enlaceEditar}><button className='btn btn-primary'>Editar</button></Link>
                                    {" "}
                                    <button className='btn btn-danger' onClick={(e)=>{borrarProducto(producto._id)}}>Borrar</button>
                                </th>
                                <td>{producto.titulo}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.descripcion}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        :
        'No existe productos cargados'
        }
    </>
    )
}

export default ListaProductos